(function () {
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  var themeToggle = document.getElementById("theme-toggle");

  var root = document.documentElement;

  function setMenuOpen(open) {
    if (!navLinks) return;
    navLinks.dataset.open = String(!!open);
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", String(!!open));
    }
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("fishman-theme", theme);
    } catch (e) {}
    if (themeToggle) {
      var icon = themeToggle.querySelector(".icon-btn-inner");
      var label = "Toggle theme";
      if (theme === "dark") {
        if (icon) icon.textContent = "☾";
        label = "Switch to light theme";
      } else {
        if (icon) icon.textContent = "☀";
        label = "Switch to dark theme";
      }
      themeToggle.setAttribute("aria-label", label);
    }
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  }

  // Mobile navigation
  if (navToggle && navLinks) {
    setMenuOpen(false);

    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.dataset.open === "true";
      setMenuOpen(!isOpen);
    });

    navLinks.addEventListener("click", function (e) {
      var t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest("[data-nav-close]")) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenuOpen(false);
    });

    document.addEventListener("click", function (e) {
      var isOpen = navLinks.dataset.open === "true";
      if (!isOpen) return;
      if (!(e.target instanceof Element)) return;
      if (e.target.closest("#nav-toggle") || e.target.closest("#nav-links")) return;
      setMenuOpen(false);
    });
  }

  // Theme toggle
  if (themeToggle) {
    var current = root.getAttribute("data-theme") || "dark";
    setTheme(current);
    themeToggle.addEventListener("click", toggleTheme);
  }
})();

