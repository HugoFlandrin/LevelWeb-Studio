(() => {
  const STORAGE_KEY = "lang";
  const SUPPORTED = ["en", "fr"];

  const dict = {
    en: {
      "nav.lang": "FR",
      "nav.about": "About",
      "nav.menuToggle": "Open navigation menu",
      "studio.tagline": "Indie game studio",
      "hero.eyebrow": "Our first game",
      "hero.lead": "A fast, arcade vertical shoot-'em-up. Survive endless waves of enemies, grab boosts and chase the high score - solo, or with a friend in 2-player co-op on PC.",
      "hero.playSolo": "Play in your browser",
      "hero.playCue": "Click or tap to play",
      "platforms.title": "Where to play",
      "platforms.web.name": "Web",
      "platforms.web.price": "Free",
      "platforms.web.body": "Play instantly in your browser, nothing to install.",
      "platforms.web.cta": "Play now",
      "platforms.pc.name": "PC",
      "platforms.pc.price": "€2.99",
      "platforms.pc.body": "Full version on itch.io.",
      "platforms.pc.cta": "Coming soon",
      "platforms.android.name": "Android",
      "platforms.android.price": "Free, with ads",
      "platforms.android.body": "Full version for Android phones and tablets.",
      "platforms.android.cta": "Coming soon",
      "credits.title": "Credits",
      "credits.music": "All the music in the game comes from Clement Panchout and his <a href=\"https://clement-panchout.itch.io/yet-another-free-music-pack\" target=\"_blank\" rel=\"noopener noreferrer\">Yet Another Free Music Pack</a>.",
      "about.meta.title": "About - LevelWeb Studio",
      "about.title": "About the studio",
      "about.body1": "LevelWeb Studio is an independent game studio created by Hugo Flandrin.",
      "about.body2": "Last Wing is its first game: a shoot-'em-up built on a custom C++ engine, compiled to WebAssembly for the web version.",
      "about.devTitle": "Behind the scenes",
      "about.devBody": "Curious about how it is made? The technical breakdown lives in the developer's portfolio.",
      "about.devLink": "Technical breakdown of Last Wing",
      "about.portfolioLink": "Hugo Flandrin's portfolio",
      "footer.about": "About",
      "footer.privacy": "Privacy policy",
      "footer.legal": "Legal notice",
      "footer.dev": "Developed by Hugo Flandrin",
      "privacy.meta.title": "Privacy policy - LevelWeb Studio",
      "privacy.title": "Last Wing – Privacy policy",
      "privacy.date": "Last updated: November 4, 2026",
      "privacy.intro": "This page describes how the mobile app <strong>Last Wing</strong> (package <code>fr.levelwebstudio.lastwing</code>), published by <strong>LevelWeb Studio</strong>, handles data.",
      "privacy.short.title": "In short",
      "privacy.short.1": "Last Wing asks for no account, name or e-mail address. Your progress stays on your device.",
      "privacy.short.2": "The developer does not collect any personal data and does not receive any.",
      "privacy.short.3": "The app shows <strong>rewarded video ads</strong> (which you choose to watch in exchange for an in-game reward). They are provided by <strong>Google AdMob</strong>, which collects and uses certain data from your device, described below.",
      "privacy.stored.title": "Data stored on your device",
      "privacy.stored.body": "To work, the game keeps your progress on your device: level, coins, unlocked and upgraded skins, records, missions, and settings (language, sound, etc.). This data stays in the app's private storage. It is not sent to the developer, not shared with anyone, and not backed up to an online service (Android's automatic backup is turned off for this app). It is deleted when you uninstall the app or clear its data in Android's settings.",
      "privacy.ads.title": "Advertising and data collected by Google AdMob",
      "privacy.ads.intro": "To show an ad, the app uses the Google Mobile Ads SDK, from Google AdMob. When an ad is requested or shown, Google may automatically collect and process the following data:",
      "privacy.ads.1": "your device's advertising identifier (Android advertising ID);",
      "privacy.ads.2": "your IP address and an approximate location derived from it;",
      "privacy.ads.3": "device and software information (model, Android version, language, carrier, screen size);",
      "privacy.ads.4": "information about interactions with ads (ad shown, watched to the end or not, click) and technical diagnostics and performance data.",
      "privacy.ads.body": "This data is used to show ads, measure their performance, prevent fraud and keep the service working. Depending on your choice (see below), ads may be personalized based on your interests, or non-personalized. The developer does not receive this individual data: they only see aggregated statistics and advertising revenue. The data is processed by Google under its own rules: <a href=\"https://policies.google.com/privacy\">policies.google.com/privacy</a> and <a href=\"https://policies.google.com/technologies/partner-sites\">how Google uses data from apps that use its services</a>.",
      "privacy.consent.title": "Your consent and choices",
      "privacy.consent.1": "<strong>European Economic Area, United Kingdom and Switzerland:</strong> on first launch, the app shows a consent form (Google's consent management platform) asking whether you accept the use of your data for advertising. You can decline or change your choice at any time from the game's options. Without consent, no personalized ads are shown.",
      "privacy.consent.2": "<strong>Advertising ID:</strong> you can reset or delete it in Android's settings (Settings &gt; Google &gt; Ads, or Settings &gt; Privacy &gt; Ads).",
      "privacy.consent.3": "<strong>Personalized ads:</strong> you can turn them off in your Google account's ad settings (<a href=\"https://myadcenter.google.com\">myadcenter.google.com</a>).",
      "privacy.consent.4": "Ads are optional: the game can be played without watching a single one.",
      "privacy.perms.title": "Permissions",
      "privacy.perms.body": "The app asks for permission to vibrate your device (haptic feedback), to access the Internet and the network state (needed to load ads), and to access the advertising ID (<code>AD_ID</code>). It does not access your contacts, photos, precise location, microphone or camera.",
      "privacy.stats.title": "Analytics and sharing",
      "privacy.stats.body": "Apart from Google AdMob, the app includes no analytics, tracking or crash-reporting tool, and shares no data with other third parties. The developer does not sell personal data.",
      "privacy.children.title": "Children",
      "privacy.children.body": "The app is not directed to children under 13 (or under 16 where local law requires it) and does not knowingly collect data about them. If you believe a child has used the app in a way that raises a concern, please contact us.",
      "privacy.rights.title": "Your rights",
      "privacy.rights.body": "Since the developer holds no personal data about you, there is nothing to access, correct or delete on their side. You keep control of your progress on your device and can erase it at any time (uninstalling, or the reset option in the game's settings). For data processed by Google, you can exercise your rights (access, deletion, objection) with Google, through the links above.",
      "privacy.changes.title": "Changes",
      "privacy.changes.body": "This page may be updated, for example if the services used change. The date of the last update is shown at the top.",
      "privacy.contact.title": "Contact",
      "privacy.contact.body": "For any question: <strong>hugoflandrinpro@gmail.com</strong>",
      "legal.meta.title": "Legal notice - LevelWeb Studio",
      "legal.title": "Legal notice",
      "legal.publisher.title": "Publisher",
      "legal.host.title": "Hosting",
      "legal.publisher.nameLabel": "Name",
      "legal.publisher.name": "Hugo Flandrin - LevelWeb Studio",
      "legal.publisher.statusLabel": "Legal status",
      "legal.publisher.status": "Sole proprietor (entrepreneur individuel)",
      "legal.publisher.siretLabel": "SIRET number",
      "legal.publisher.contactLabel": "Contact",
      "legal.host.nameLabel": "Host",
      "legal.host.name": "GitHub, Inc. (GitHub Pages)",
      "legal.host.addressLabel": "Address",
      "legal.host.address": "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA",
      "home.featured.playAgain": "Play again",
      "home.featured.closeGame": "Close",
      "home.featured.resultWin": "Victory!",
      "home.featured.resultLoss": "Defeat",
      "home.featured.resultScore": "Score:",
      "project.shmup.settingsAriaLabel": "Audio settings",
      "project.shmup.settingsTitle": "Audio settings",
      "project.shmup.musicLabel": "Music",
      "project.shmup.sfxLabel": "Sound effects",
      "project.shmup.muteMusicAriaLabel": "Mute music",
      "project.shmup.muteSfxAriaLabel": "Mute sound effects",
      "project.shmup.addPlayer": "Add a player",
      "project.shmup.removePlayer": "Remove player 2",
      "project.shmup.playersInfo": "About the 2-player mode",
    },
    fr: {
      "nav.lang": "EN",
      "nav.about": "À propos",
      "nav.menuToggle": "Ouvrir le menu de navigation",
      "studio.tagline": "Studio de jeux vidéo indépendant",
      "hero.eyebrow": "Notre premier jeu",
      "hero.lead": "Un shoot-'em-up vertical, nerveux et arcade. Survis à des vagues d'ennemis sans fin, ramasse des bonus et bats ton record - en solo, ou à deux en coopération sur PC.",
      "hero.playSolo": "Jouer dans le navigateur",
      "hero.playCue": "Cliquer ou toucher pour jouer",
      "platforms.title": "Où jouer",
      "platforms.web.name": "Web",
      "platforms.web.price": "Gratuit",
      "platforms.web.body": "Jouable instantanément dans ton navigateur, rien à installer.",
      "platforms.web.cta": "Jouer maintenant",
      "platforms.pc.name": "PC",
      "platforms.pc.price": "2,99 €",
      "platforms.pc.body": "Version complète sur itch.io.",
      "platforms.pc.cta": "Bientôt disponible",
      "platforms.android.name": "Android",
      "platforms.android.price": "Gratuit, avec publicités",
      "platforms.android.body": "Version complète pour téléphone et tablette Android.",
      "platforms.android.cta": "Bientôt disponible",
      "credits.title": "Crédits",
      "credits.music": "Toutes les musiques du jeu proviennent de Clement Panchout et de son pack <a href=\"https://clement-panchout.itch.io/yet-another-free-music-pack\" target=\"_blank\" rel=\"noopener noreferrer\">Yet Another Free Music Pack</a>.",
      "about.meta.title": "À propos - LevelWeb Studio",
      "about.title": "À propos du studio",
      "about.body1": "LevelWeb Studio est un studio de jeux vidéo indépendant créé par Hugo Flandrin.",
      "about.body2": "Last Wing est son premier jeu : un shoot-'em-up construit sur un moteur C++ maison, compilé en WebAssembly pour la version web.",
      "about.devTitle": "Les coulisses",
      "about.devBody": "Envie de savoir comment c'est fait ? Le détail technique se trouve dans le portfolio du développeur.",
      "about.devLink": "Détail technique de Last Wing",
      "about.portfolioLink": "Portfolio de Hugo Flandrin",
      "footer.about": "À propos",
      "footer.privacy": "Politique de confidentialité",
      "footer.legal": "Mentions légales",
      "footer.dev": "Développé par Hugo Flandrin",
      "privacy.meta.title": "Politique de confidentialité - LevelWeb Studio",
      "privacy.title": "Last Wing – Politique de confidentialité",
      "privacy.date": "Dernière mise à jour : 4 novembre 2026",
      "privacy.intro": "Cette page décrit comment l'application mobile <strong>Last Wing</strong> (identifiant <code>fr.levelwebstudio.lastwing</code>), éditée par <strong>LevelWeb Studio</strong>, traite les données.",
      "privacy.short.title": "En bref",
      "privacy.short.1": "Last Wing ne demande ni compte, ni nom, ni adresse e-mail. Votre progression reste sur votre appareil.",
      "privacy.short.2": "Le développeur ne collecte aucune donnée personnelle et n'en reçoit aucune.",
      "privacy.short.3": "L'application affiche des <strong>publicités vidéo récompensées</strong> (que vous choisissez de regarder en échange d'une récompense dans le jeu). Elles sont fournies par <strong>Google AdMob</strong>, qui collecte et utilise certaines données de votre appareil, décrites ci-dessous.",
      "privacy.stored.title": "Données enregistrées sur votre appareil",
      "privacy.stored.body": "Pour fonctionner, le jeu garde sur votre appareil votre progression : niveau, pièces, skins débloqués et améliorés, records, missions, et options (langue, son, etc.). Ces données restent dans l'espace de stockage privé de l'application. Elles ne sont ni envoyées au développeur, ni partagées avec qui que ce soit, ni sauvegardées sur un service en ligne (la sauvegarde automatique d'Android est désactivée pour cette application). Elles sont supprimées si vous désinstallez l'application ou effacez ses données dans les réglages d'Android.",
      "privacy.ads.title": "Publicités et données collectées par Google AdMob",
      "privacy.ads.intro": "Pour afficher une publicité, l'application utilise le kit de développement (SDK) Google Mobile Ads, de Google AdMob. Lorsqu'une publicité est demandée ou affichée, Google peut collecter et traiter automatiquement les données suivantes :",
      "privacy.ads.1": "l'identifiant publicitaire de votre appareil (identifiant Android de publicité) ;",
      "privacy.ads.2": "votre adresse IP et une localisation approximative qui en est déduite ;",
      "privacy.ads.3": "des informations sur l'appareil et le logiciel (modèle, version d'Android, langue, opérateur, taille d'écran) ;",
      "privacy.ads.4": "des informations sur les interactions avec les publicités (publicité affichée, vue en entier ou non, clic) et des données techniques de diagnostic et de performance.",
      "privacy.ads.body": "Ces données servent à afficher des publicités, à mesurer leur performance, à lutter contre la fraude et à assurer le bon fonctionnement du service. Selon votre choix (voir ci-dessous), les publicités peuvent être personnalisées d'après vos centres d'intérêt, ou non personnalisées. Le développeur ne reçoit pas ces données individuelles : il ne voit que des statistiques globales et les revenus publicitaires. Les données sont traitées par Google selon ses propres règles : <a href=\"https://policies.google.com/privacy\">policies.google.com/privacy</a> et <a href=\"https://policies.google.com/technologies/partner-sites\">comment Google utilise les données des applications qui utilisent ses services</a>.",
      "privacy.consent.title": "Votre consentement et vos choix",
      "privacy.consent.1": "<strong>Espace économique européen, Royaume-Uni et Suisse :</strong> au premier lancement, l'application affiche un formulaire de consentement (plateforme de gestion du consentement de Google) qui vous demande si vous acceptez l'utilisation de vos données pour les publicités. Vous pouvez refuser ou modifier votre choix à tout moment depuis les options du jeu. Sans consentement, aucune publicité personnalisée n'est affichée.",
      "privacy.consent.2": "<strong>Identifiant publicitaire :</strong> vous pouvez le réinitialiser, ou le supprimer, dans les réglages d'Android (Paramètres &gt; Google &gt; Annonces, ou Paramètres &gt; Confidentialité &gt; Annonces).",
      "privacy.consent.3": "<strong>Publicités personnalisées :</strong> vous pouvez les désactiver dans les paramètres d'annonces de votre compte Google (<a href=\"https://myadcenter.google.com\">myadcenter.google.com</a>).",
      "privacy.consent.4": "Les publicités sont facultatives : le jeu reste jouable sans en regarder une seule.",
      "privacy.perms.title": "Autorisations",
      "privacy.perms.body": "L'application demande l'autorisation de faire vibrer l'appareil (retour tactile), d'accéder à Internet et à l'état du réseau (nécessaire pour charger les publicités), et d'accéder à l'identifiant publicitaire (<code>AD_ID</code>). Elle n'accède ni à vos contacts, ni à vos photos, ni à votre position précise, ni au micro, ni à l'appareil photo.",
      "privacy.stats.title": "Statistiques et partage",
      "privacy.stats.body": "Hormis Google AdMob, l'application n'intègre aucun outil de statistiques, de suivi ou de rapport de plantage, et ne partage aucune donnée avec d'autres tiers. Le développeur ne vend pas de données personnelles.",
      "privacy.children.title": "Enfants",
      "privacy.children.body": "L'application ne s'adresse pas aux enfants de moins de 13 ans (ou de moins de 16 ans lorsque la loi locale l'exige) et ne cherche pas à collecter sciemment de données les concernant. Si vous pensez qu'un enfant a utilisé l'application d'une manière qui pose problème, contactez-nous.",
      "privacy.rights.title": "Vos droits",
      "privacy.rights.body": "Le développeur ne détenant aucune donnée personnelle vous concernant, il n'y a rien à consulter, corriger ou supprimer de son côté. Vous gardez le contrôle de votre progression sur votre appareil, et pouvez l'effacer à tout moment (désinstallation, ou option de réinitialisation dans les options du jeu). Pour les données traitées par Google, vous pouvez exercer vos droits (accès, suppression, opposition) auprès de Google, via les liens ci-dessus.",
      "privacy.changes.title": "Modifications",
      "privacy.changes.body": "Cette page peut être mise à jour, par exemple si les services utilisés changent. La date de dernière mise à jour est indiquée en haut.",
      "privacy.contact.title": "Contact",
      "privacy.contact.body": "Pour toute question : <strong>hugoflandrinpro@gmail.com</strong>",
      "legal.meta.title": "Mentions légales - LevelWeb Studio",
      "legal.title": "Mentions légales",
      "legal.publisher.title": "Éditeur",
      "legal.host.title": "Hébergement",
      "legal.publisher.nameLabel": "Nom",
      "legal.publisher.name": "Hugo Flandrin - LevelWeb Studio",
      "legal.publisher.statusLabel": "Statut juridique",
      "legal.publisher.status": "Entrepreneur individuel",
      "legal.publisher.siretLabel": "Numéro SIRET",
      "legal.publisher.contactLabel": "Contact",
      "legal.host.nameLabel": "Hébergeur",
      "legal.host.name": "GitHub, Inc. (GitHub Pages)",
      "legal.host.addressLabel": "Adresse",
      "legal.host.address": "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
      "home.featured.playAgain": "Rejouer",
      "home.featured.closeGame": "Fermer",
      "home.featured.resultWin": "Victoire !",
      "home.featured.resultLoss": "Défaite",
      "home.featured.resultScore": "Score :",
      "project.shmup.settingsAriaLabel": "Réglages audio",
      "project.shmup.settingsTitle": "Réglages audio",
      "project.shmup.musicLabel": "Musique",
      "project.shmup.sfxLabel": "Effets sonores",
      "project.shmup.muteMusicAriaLabel": "Couper la musique",
      "project.shmup.muteSfxAriaLabel": "Couper les effets sonores",
      "project.shmup.addPlayer": "Ajouter un joueur",
      "project.shmup.removePlayer": "Retirer le joueur 2",
      "project.shmup.playersInfo": "À propos du mode 2 joueurs",
    },
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    return "fr";
  }

  function setLang(lang) {
    const next = SUPPORTED.includes(lang) ? lang : "fr";
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  function t(key) {
    const lang = getLang();
    return dict[lang]?.[key] ?? dict.en[key] ?? key;
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = dict[lang]?.[key] ?? dict.en[key] ?? el.textContent;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = dict[lang]?.[key] ?? dict.en[key] ?? el.innerHTML;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      el.setAttribute(
        "placeholder",
        dict[lang]?.[key] ?? dict.en[key] ?? el.getAttribute("placeholder") ?? ""
      );
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (!key) return;
      el.setAttribute(
        "aria-label",
        dict[lang]?.[key] ?? dict.en[key] ?? el.getAttribute("aria-label") ?? ""
      );
    });

    const toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) toggle.textContent = dict[lang]["nav.lang"];
  }

  function init() {
    apply(getLang());

    const toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = getLang();
        setLang(current === "en" ? "fr" : "en");
      });
    }
  }

  window.__i18n = { getLang, setLang, t, apply };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
