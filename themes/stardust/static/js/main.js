"use strict";

(function () {
  var initMasonry = function () {
    $(".masonry").each(function () {
      var grid = $(this).find(".grid").masonry({
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });

      grid.imagesLoaded().progress(function () {
        grid.masonry("layout");
      });
    });
  };

  var initTyped = function () {
    $(".typed--content").each(function () {
      var typed = new Typed(".typed", {
        stringsElement: $(this).find(".typed--strings")[0],
        typeSpeed: 30,
        backSpeed: 15,
        startDelay: 1500,
        smartBackspace: true,
        loop: true,
      });
    });
  };

  var initPreloader = function () {
    $(window).on("load", function () {
      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(300).fadeOut("slow");
      });
    });
  };

  var initToggleMenu = function () {
    var toggle = $(".header-menu-toggle");
    var nav = $(".header-nav-wrap");

    toggle.on("click", function (event) {
      event.preventDefault();
      toggle.toggleClass("is-clicked");
      nav.slideToggle();
    });
  };

  (function init() {
    initMasonry();
    initTyped();
    initPreloader();
    initToggleMenu();
  })();
})();
