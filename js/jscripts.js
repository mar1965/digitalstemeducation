$(function() {

	"use strict";

	var topoffset = 70;
	var window_height = $(window).height(); //get the window height

	$('.fullheight').css('height', window_height);

	//Enable Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	})

	//Enable smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') ===
			this.pathname.replace(/^\//,'') &&
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2
				}, 800);
				return false;
			} //target.length
		} //click function
	}); //smooth scroll


	//Enable fadeins
  // First, get the number of elements with class hidethis
  var whattohide = '.hidethis';
  var numtohide = $(whattohide).length;
  var fadeins = 2000;
  var fadeouts = 500;

  $(document).ready(function() {
    $(window).scroll(function() {
      $(".hidethis").each(function(i) {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).delay(200).fadeTo(fadeins,1);}
        } /*else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).delay(50 * (i-1)).fadeTo(fadeouts,0);}
        }*/
      });
      }); $(window).scroll(); //invoke scroll-handler on page-load
  });

});
