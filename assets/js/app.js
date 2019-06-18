(function($) {
    "use strict";
    if ('.top-carousel'.length > 0) {
        $(".top-slider").owlCarousel({
            autoplay: true,
            dots: true,
            nav: true,
            loop: true,
            margin: 30,
            lazyLoad: true,
            center: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    /* slimmenu */
    $('.slimmenu').slimmenu({
        resizeWidth: '991',
        animSpeed: 'medium',
        indentChildren: true,
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

$(window).on('load', function() {

    /*  Preloader js*/
    var preLoder = $(".preloader-wrapper");
    preLoder.fadeOut(1000);



    /*Isotope */
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: 2,
        }
    });


});


}(jQuery));


