(function () {
  var prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Scroll reveal
  var revealEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Fallback: show content.
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Smooth in-page anchors (only for same-document hashes)
  document.addEventListener("click", function (e) {
    var target = e.target;
    if (!(target instanceof Element)) return;
    var link = target.closest('a[href^="#"]');
    if (!link) return;

    var href = link.getAttribute("href");
    if (!href || href === "#") return;

    var id = href.slice(1);
    var el = document.getElementById(id) || document.querySelector(href);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", href);
  });

  // Subtle hero parallax
  if (!prefersReduced) {
    var raf = 0;
    var mx = 0;
    var my = 0;
    window.addEventListener(
      "mousemove",
      function (e) {
        mx = e.clientX - window.innerWidth / 2;
        my = e.clientY - window.innerHeight / 2;
        if (raf) return;
        raf = window.requestAnimationFrame(function () {
          // Pre-scale for CSS transforms (avoids calc multiplication for compatibility).
          var scaledX = mx / 50;
          var scaledY = my / 50;
          document.documentElement.style.setProperty("--mx-bg", -scaledX + "px");
          document.documentElement.style.setProperty("--my-bg", -scaledY + "px");
          document.documentElement.style.setProperty("--mx-blob", scaledX + "px");
          document.documentElement.style.setProperty("--my-blob", scaledY + "px");
          raf = 0;
        });
      },
      { passive: true }
    );
  }
})();

