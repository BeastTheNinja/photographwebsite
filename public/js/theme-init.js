// Theme init script moved out oflined to avoid CSP inline-script requirements.
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (
      t === "dark" ||
      (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    /* noop */
  }
})();
