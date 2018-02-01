jQuery(document).ready(function() {
  if (is_touch_device()) {
    jQuery(".full-screen-scroll article").css("opacity", "1", "!important");
  }

  var ua = navigator.userAgent.toLowerCase();
  if ( (ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1) || is_touch_device() ) {
    jQuery("html").css("overflow", "auto");

    jQuery(".scroll-top").click(function() {
      jQuery("html, body").animate({ scrollTop: 0 }, 2000);
      return false;
    });
  } else {
    jQuery("html, .menu-left-part, #cbp-bislideshow.scroll").niceScroll({cursorcolor: "#5B5B5B",scrollspeed: 100,mousescrollstep: 80,cursorwidth: "12px",cursorborder: "none",cursorborderradius: "0px"});

    //Scroll Top animation
    jQuery(".scroll-top").click(function() { jQuery("html").getNiceScroll(0).doScrollTop(0); });
    jQuery(".sidebar").mouseover(function() { jQuery(".menu-left-part").getNiceScroll().resize(); });
  }
});

jQuery(window).load(function() {
  jQuery(".blog-item-holder").hover(
    function() { jQuery(".blog-item-holder").not(this).addClass("blur"); },
    function() { jQuery(".blog-item-holder").removeClass("blur"); }
  );

  //Set menu
  jQuery(".main-menu").smartmenus({subMenusSubOffsetX: 1, subMenusSubOffsetY: -8, markCurrentItem: true });

  //Show-Hide header sidebar
  jQuery("#toggle").on("click", multiClickFunctionStop);

  //Fix resume page
  $(".level-bar-inner").css("width", "0");
  $(".level-bar-inner").each(function() {
    $(this).animate({ width: $(this).data("level") }, 800);
  });

  //Fix for sidebar height
  jQuery("#sidebar").css("minHeight", jQuery("body").outerHeight());
  jQuery(".sidebar-wrapper").css("minHeight", jQuery(".main-wrapper").outerHeight());

  jQuery(".spinner").fadeOut("fast");
});

jQuery(window).resize(function() {
  //Fix for sidebar height
  jQuery("#sidebar").css("minHeight", jQuery("body").outerHeight());
  jQuery(".sidebar-wrapper").css("minHeight", jQuery(".main-wrapper").outerHeight());

  

  jQuery(".menu-left-part.open").width( jQuery(".sidebar.open").width() - jQuery(".menu-right-part.open").width() );
});
window.dispatchEvent(new Event('resize'));

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

var multiClickFunctionStop = function(e) {
  e.preventDefault();
  jQuery("#toggle").off("click");
  jQuery("#toggle").toggleClass("on");
  jQuery("html, body, .sidebar, .menu-left-part, .menu-right-part").toggleClass("open");
  jQuery(".menu-left-part").width("320px");
  jQuery(".menu-left-part.open").width( jQuery(".sidebar.open").width() - jQuery(".menu-right-part.open").width() );
  jQuery("#toggle").on("click", multiClickFunctionStop);
};

function is_touch_device() { return !!("ontouchstart" in window); }

jQuery(window).bind("scroll", function() {
  if (jQuery(this).scrollTop() > 700) { 
    jQuery(".scroll-top").fadeIn(500);
  } else {
    jQuery(".scroll-top").fadeOut(500);
  }
});
