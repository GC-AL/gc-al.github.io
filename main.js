$(document).ready(function () {

  new WOW().init();

  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px"
        },
        200
      );

      $("body").animate(
        {
          right: "285px"
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        200
      );

      $("body").animate(
        {
          right: "0px"
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        500
      );

      $("body").animate(
        {
          right: "0px"
        },
        500
      );
    });
  };

  $(document).ready(main);

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["HOME", "THE FIRM", "CONTACT US"],
    anchors: ["home", "the firm", "contact us"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      if (index == 1) {
        /* add opacity to arrow */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
        $(".header-links a").each(function () {
          $(this).css("color", "white");
        });
        $(".header-links").css("background-color", "transparent");
      } else if (index != 1) {
        $(".header-links a").each(function () {
          $(this).css("color", "white");
        });
        $(".header-links").css("background-color", "#333333");
        $(".header-links").css("opacity", "0.8");
      }
    }
  });

  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  $(document).on("click", "#about", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });
});
