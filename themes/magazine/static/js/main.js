"use strict";

(function () {
  var initBodyFade = function () {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.classList.remove("js-loading");
    });

    window.addEventListener("pageshow", function () {
      document.body.classList.remove("js-loading");
    });

    document.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (!link) return;
      var href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (link.target === "_blank" || link.hostname !== window.location.hostname) return;
      e.preventDefault();
      document.body.classList.add("js-loading");
      setTimeout(function () {
        window.location.href = href;
      }, 500);
    });
  };

  var initMasonry = function () {
    document.querySelectorAll(".masonry").forEach(function (el) {
      var grid = el.querySelector(".grid");
      if (!grid) return;
      var msnry = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });
      imagesLoaded(grid).on("progress", function () {
        msnry.layout();
      });
    });
  };

  var initTyped = function () {
    var typedContent = document.querySelector(".typed--content");
    if (!typedContent) return;
    var stringsEl = typedContent.querySelector(".typed--strings");
    new Typed(".typed", {
      stringsElement: stringsEl,
      typeSpeed: 30,
      backSpeed: 15,
      startDelay: 1500,
      smartBackspace: true,
      loop: true,
    });
  };

  var initToggleMenu = function () {
    var toggle = document.querySelector(".header-menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      toggle.classList.toggle("is-clicked");
      nav.classList.toggle("is-open");
    });
  };

  var initStickyHeader = function () {
    var header = document.getElementById("site-header");
    if (!header) return;
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  };

  initBodyFade();
  initMasonry();
  initTyped();
  initToggleMenu();
  initStickyHeader();
})();
