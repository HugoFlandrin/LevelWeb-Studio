(() => {
  const gear = document.getElementById("game-settings-toggle");
  const panel = document.getElementById("game-settings-panel");
  const backdrop = document.getElementById("game-settings-backdrop");
  const frame = document.getElementById("game-frame");
  const musicVolumeInput = document.getElementById("music-volume");
  const sfxVolumeInput = document.getElementById("sfx-volume");
  const musicMuteBtn = document.getElementById("music-mute");
  const sfxMuteBtn = document.getElementById("sfx-mute");

  if (!gear || !panel || !backdrop || !frame || !musicVolumeInput || !sfxVolumeInput || !musicMuteBtn || !sfxMuteBtn) return;

  const STORAGE = {
    musicVolume: "shmup-music-volume",
    sfxVolume: "shmup-sfx-volume",
    musicMuted: "shmup-music-muted",
    sfxMuted: "shmup-sfx-muted",
  };

  const state = {
    // 50, not 100, for both: matches AudioManager's own musicVolume/
    // sfxVolume defaults (see their own comments) - the music was drowning
    // out the sfx at full volume, so both sliders start at their center
    // instead of their max, same as each other.
    musicVolume: Number(localStorage.getItem(STORAGE.musicVolume) ?? 50),
    sfxVolume: Number(localStorage.getItem(STORAGE.sfxVolume) ?? 50),
    musicMuted: localStorage.getItem(STORAGE.musicMuted) === "true",
    sfxMuted: localStorage.getItem(STORAGE.sfxMuted) === "true",
  };

  const send = (type, value) => {
    frame.contentWindow?.postMessage({ type, value }, "*");
  };

  // Drives the mute button's own volume-bar icon (see the SVG's vol-bar-1/
  // vol-bar-2 rects in index.html/pages/last-wing.html and the matching
  // CSS in game-embed.css) - volume alone, nothing to do with mute (see
  // syncUI()'s own is-muted class, which swaps the bars for a cross
  // regardless of what this returns): 0 bars at 0%, 1 bar at/under half,
  // 2 bars above half, same break points an OS volume indicator would use.
  const volumeLevel = (volume) => {
    if (volume <= 0) return 0;
    return volume > 50 ? 2 : 1;
  };

  const applyAll = () => {
    send("setMusicVolume", state.musicVolume / 100);
    send("setSfxVolume", state.sfxVolume / 100);
    send("setMusicMuted", state.musicMuted);
    send("setSfxMuted", state.sfxMuted);
  };

  const syncUI = () => {
    musicVolumeInput.value = state.musicVolume;
    sfxVolumeInput.value = state.sfxVolume;
    musicMuteBtn.classList.toggle("is-muted", state.musicMuted);
    musicMuteBtn.setAttribute("aria-pressed", String(state.musicMuted));
    musicMuteBtn.dataset.level = volumeLevel(state.musicVolume);
    sfxMuteBtn.classList.toggle("is-muted", state.sfxMuted);
    sfxMuteBtn.setAttribute("aria-pressed", String(state.sfxMuted));
    sfxMuteBtn.dataset.level = volumeLevel(state.sfxVolume);
  };

  syncUI();

  const openSettings = () => {
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    backdrop.classList.add("is-active");
    send("setPaused", true);
  };

  // Also refocuses the game frame: closing via the gear (or the backdrop,
  // which sits on top of the iframe while open) leaves keyboard focus on
  // whatever HTML element was actually clicked, not the iframe itself -
  // without this, arrow-key/WASD input stays dead until the player clicks
  // the game a second time.
  const closeSettings = () => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("is-active");
    send("setPaused", false);
    frame.focus();
    try {
      frame.contentWindow?.focus();
    } catch {

    }
  };

  gear.addEventListener("click", () => {
    if (panel.classList.contains("is-open")) {
      closeSettings();
    } else {
      openSettings();
    }
  });

  backdrop.addEventListener("click", closeSettings);

  musicVolumeInput.addEventListener("input", () => {
    state.musicVolume = Number(musicVolumeInput.value);
    localStorage.setItem(STORAGE.musicVolume, String(state.musicVolume));
    musicMuteBtn.dataset.level = volumeLevel(state.musicVolume);
    send("setMusicVolume", state.musicVolume / 100);
  });

  sfxVolumeInput.addEventListener("input", () => {
    state.sfxVolume = Number(sfxVolumeInput.value);
    localStorage.setItem(STORAGE.sfxVolume, String(state.sfxVolume));
    sfxMuteBtn.dataset.level = volumeLevel(state.sfxVolume);
    send("setSfxVolume", state.sfxVolume / 100);
  });

  musicMuteBtn.addEventListener("click", () => {
    state.musicMuted = !state.musicMuted;
    localStorage.setItem(STORAGE.musicMuted, String(state.musicMuted));
    syncUI();
    send("setMusicMuted", state.musicMuted);
  });

  sfxMuteBtn.addEventListener("click", () => {
    state.sfxMuted = !state.sfxMuted;
    localStorage.setItem(STORAGE.sfxMuted, String(state.sfxMuted));
    syncUI();
    send("setSfxMuted", state.sfxMuted);
  });

  // ---- The two-player mode (see CoopRun in the game): "add a player" brings the game's start screen back with a second ship.
  const playersBtn = document.getElementById("game-players-btn");
  const playersInfo = document.getElementById("game-players-info");
  const playersDialog = document.getElementById("game-players-dialog");
  if (playersBtn && playersInfo && playersDialog) {
    const lang = () => (window.__i18n?.getLang?.() ?? document.documentElement.lang ?? "en") === "fr" ? "fr" : "en";
    const texts = {
      en: {
        title: "2-player mode",
        lines: [
          "Play together on the same keyboard, in every game mode. The difficulty adapts: enemies and bosses are tougher.",
          "Both players share a single life bar: when it reaches zero, you both die.",
          "Every boost one player catches is applied to both of you.",
          "If either of you hits an enemy, you both die.",
        ],
        player1: "Player 1", player2: "Player 2", letters: ["W", "A", "S", "D"], arrows: "Arrow keys",
        pcTitle: "A computer is needed",
        pcBody: "The 2-player mode is played on a computer, with a keyboard: both players share it. Open the game on a PC to play with a friend.",
        add: "Add a player", remove: "Remove player 2",
      },
      fr: {
        title: "Mode 2 joueurs",
        lines: [
          "Jouez à deux sur le même clavier, dans tous les modes de jeu. La difficulté s\u2019adapte : les ennemis et les boss sont plus résistants.",
          "Les deux joueurs partagent une seule barre de vie : quand elle tombe à zéro, vous mourez tous les deux.",
          "Chaque boost ramassé par un joueur est appliqué aux deux.",
          "Si l’un de vous percute un ennemi, vous mourez tous les deux.",
        ],
        player1: "Joueur 1", player2: "Joueur 2", letters: ["Z", "Q", "S", "D"], arrows: "Flèches directionnelles",
        pcTitle: "Un ordinateur est nécessaire",
        pcBody: "Le mode 2 joueurs se joue sur ordinateur, avec un clavier : les deux joueurs le partagent. Ouvrez le jeu sur PC pour jouer à deux.",
        add: "Ajouter un joueur", remove: "Retirer le joueur 2",
      },
    };
    const dialogTitle = document.getElementById("game-players-dialog-title");
    const dialogBody = document.getElementById("game-players-dialog-body");
    const dialogClose = document.getElementById("game-players-dialog-close");
    // Same test as game-embed.js: a touch screen (or a very narrow window) is not a computer with a keyboard.
    const isPc = () =>
      !window.matchMedia("(pointer: coarse)").matches &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(max-width: 640px)").matches;
    let twoPlayers = false;

    const refreshButton = () => {
      const t = texts[lang()];
      playersBtn.textContent = twoPlayers ? t.remove : t.add;
      playersBtn.classList.toggle("is-on", twoPlayers);
    };
    const keysLine = (label, keys) => `<p><strong>${label}</strong> : ${keys.map((k) => `<kbd>${k}</kbd>`).join("")}</p>`;
    const openDialog = (title, html) => {
      dialogTitle.textContent = title;
      dialogBody.innerHTML = html;
      playersDialog.classList.add("is-open");
    };
    refreshButton();
    // The language can change while the page is open: the label follows (checked when the panel opens).
    gear.addEventListener("click", refreshButton);

    playersBtn.addEventListener("click", () => {
      if (!isPc()) {
        closeSettings();
        const t = texts[lang()];
        openDialog(t.pcTitle, `<p>${t.pcBody}</p>`);
        return;
      }
      twoPlayers = !twoPlayers;
      refreshButton();
      send("setPlayers", twoPlayers ? 2 : 1);
      closeSettings();
    });
    playersInfo.addEventListener("click", () => {
      const t = texts[lang()];
      openDialog(t.title, `<ul>${t.lines.map((line) => `<li>${line}</li>`).join("")}</ul>` + keysLine(t.player1, t.letters) + keysLine(t.player2, [t.arrows]));
    });
    dialogClose?.addEventListener("click", () => playersDialog.classList.remove("is-open"));
    playersDialog.addEventListener("click", (e) => {
      if (e.target === playersDialog) playersDialog.classList.remove("is-open");
    });
    // Each open of the game is a new instance: it starts with one player.
    new MutationObserver(() => {
      if (!document.getElementById("game-overlay")?.classList.contains("is-open")) {
        twoPlayers = false;
        refreshButton();
      }
    }).observe(document.getElementById("game-overlay"), { attributes: true, attributeFilter: ["class"] });
  }

  // Re-applies the stored preferences every time the game announces it
  // finished booting (see shell-shmup.html's onRuntimeInitialized) - each
  // open/replay spins up a brand-new wasm instance at its audio defaults,
  // since game-embed.js reassigns frame.src fresh every time.
  window.addEventListener("message", (event) => {
    const data = event.data;
    if (data?.type === "shmupReady") {
      applyAll();
    } else if (data?.type === "shmupSettingsAvailable") {
      // The game has its own start screen and pause button (solo mode): this button is there on the start screen alone.
      if (!data.value && panel.classList.contains("is-open")) {
        panel.classList.remove("is-open");
        panel.setAttribute("aria-hidden", "true");
        backdrop.classList.remove("is-active");
      }
      gear.hidden = !data.value;
    } else if (data?.type === "shmupAudio") {
      // A volume was changed on the game's own pause screen: the sliders and what is remembered follow, so both
      // places always show (and keep) the same setting.
      state.musicVolume = Math.round(Number(data.musicVolume) * 100);
      state.sfxVolume = Math.round(Number(data.sfxVolume) * 100);
      state.musicMuted = !!data.musicMuted;
      state.sfxMuted = !!data.sfxMuted;
      localStorage.setItem(STORAGE.musicVolume, String(state.musicVolume));
      localStorage.setItem(STORAGE.sfxVolume, String(state.sfxVolume));
      localStorage.setItem(STORAGE.musicMuted, String(state.musicMuted));
      localStorage.setItem(STORAGE.sfxMuted, String(state.sfxMuted));
      syncUI();
    }
  });
})();
