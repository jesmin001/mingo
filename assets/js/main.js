(function ($) {
	"use strict";
	 	
/* slimmenu */
$('.slimmenu').slimmenu({
        resizeWidth: '907',
        animSpeed: 'medium',
        indentChildren: true,
    });

/*Isotope */	
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: 2,
  }
});	
	
/* scrollUp */
    jQuery.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 4000, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 1000, // Animation in speed (ms)
    animationOutSpeed: 1000, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
  
 /*  aos js*/
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


}(jQuery));

 
$(window).on('load',function(){

/*  Preloader js*/
        var preLoder = $(".preloader-wrapper");
        preLoder.fadeOut(1000);
       
    });    
		
	
