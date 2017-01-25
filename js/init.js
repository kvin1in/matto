(function($) {
    $(function() {

        $('.slider').slider({ full_width: true });
        $('.carousel.carousel-slider').carousel({ full_width: true });

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        var options = [
            { selector: '#slider', offset: 100, callback: 'Materialize.fadeInImage("#slider"), 2000' },
            { selector: '#carousel', offset: 100, callback: 'Materialize.fadeInImage("#carousel"), 2000' },
            { selector: '#video', offset: 100, callback: 'Materialize.fadeInImage("#video"), 2000' },
            { selector: '#news', offset: 100, callback: 'Materialize.fadeInImage("#news"), 2000' },
        ];
        Materialize.scrollFire(options);


    }); // end of document ready
})(jQuery); // end of jQuery name space