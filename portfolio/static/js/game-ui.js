
if (false) {
(() => {
  const overlay = document.getElementById("page-transition");
  if (!overlay) return;
  const bar = overlay.querySelector(".pt-bar");

  overlay.classList.add("pt-js");

  const PRE_FILL_MS = 150;
  const FILL_MS = 300;
  const HOLD_MS = 100;
  const ARRIVE_SETTLE_MS = 70;

  function hideOverlay() {
    overlay.classList.add("pt-hide");
    overlay.classList.remove("pt-active");
  }

  setTimeout(hideOverlay, ARRIVE_SETTLE_MS);

  window.addEventListener("pageshow", (e) => {
    if (e.persisted) hideOverlay();
  });

  document.addEventListener("click", (e) => {
    if (overlay.classList.contains("pt-active")) return;

    const link = e.target.closest("a[href]");
    if (!link) return;
    if (link.target && link.target !== "_self") return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin) return;

    const samePageAnchor = url.pathname === window.location.pathname && url.hash !== "";
    if (samePageAnchor) return;

    e.preventDefault();

    overlay.classList.remove("pt-hide");
    overlay.classList.add("pt-active");

    function fillThenNavigate() {
      setTimeout(() => {
        if (bar) bar.classList.remove("pt-empty");
        setTimeout(() => {
          window.location.href = link.href;
        }, FILL_MS + HOLD_MS);
      }, PRE_FILL_MS);
    }

    if (bar) {

      bar.classList.add("pt-instant");
      bar.classList.add("pt-empty");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.classList.remove("pt-instant");
          fillThenNavigate();
        });
      });
    } else {
      fillThenNavigate();
    }
  });
})();
}
