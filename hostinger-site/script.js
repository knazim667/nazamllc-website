/* Nazam LLC — site behavior: headroom nav, scroll-reveal, labs filter pills. */
(function () {
  "use strict";

  // Headroom-style sticky nav: hide on scroll down, show on scroll up.
  function initHeadroomNav() {
    var nav = document.getElementById("main-nav");
    if (!nav) return;

    var lastY = 0;
    var ticking = false;
    var DEADBAND = 8;

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var y = window.scrollY;
          var delta = y - lastY;
          if (Math.abs(delta) > DEADBAND) {
            if (delta > 0 && y > 140) {
              nav.classList.add("is-hidden");
            } else {
              nav.classList.remove("is-hidden");
            }
            lastY = y;
          }
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  // Scroll-reveal animation via IntersectionObserver.
  function initScrollReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.setAttribute("data-revealed", "true");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Labs filter pills (visual state only — single result set today).
  function initFilterPills() {
    document.querySelectorAll(".pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        pill.closest(".pills").querySelectorAll(".pill").forEach(function (p) {
          p.classList.remove("active");
        });
        pill.classList.add("active");
      });
    });
  }

  // Mobile menu: toggle, focus trap, escape to close.
  function initMobileMenu() {
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) { menu.removeAttribute("hidden"); }
      else { menu.setAttribute("hidden", ""); }
      document.body.classList.toggle("menu-open", open);
      if (open) {
        var first = menu.querySelector("a");
        if (first) first.focus();
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close if resized up to desktop while open.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 880 && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
      }
    }, { passive: true });
  }

  initHeadroomNav();
  initScrollReveal();
  initFilterPills();
  initMobileMenu();
})();
