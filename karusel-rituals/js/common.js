$(function() {
    $('.brand__slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.action__slides').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true
    });


    function slickify(){
        $('.conditions__slider').not('.slick-initialized').slick({
            responsive: [
                {
                    breakpoint: 2048,
                    settings: "unslick"
                },
                {
                    breakpoint: 1200,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 500,
                        fade: true,
                        cssEase: 'linear',
                        arrows: true,
                        dots: false
                    }
                }
            ]
        });
    }

    slickify();
    $(window).resize(function(){
        var $windowWidth = $(window).width();
        if ($windowWidth < 1200) {
            slickify();
        }
    });

    $(".top-nav").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 2500);
    });

    $(".slicknav_nav").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 2500);
    });


    $('#top-nav').slicknav({
        prependTo: '.nav_mobile'
    });

    $('.slicknav_nav li').click( function () {
        $('.slicknav_nav').fadeOut();
        $('.slicknav_btn').removeClass('slicknav_open');
    })

    $(window).resize(function () {
        if($(window).width() <= 576){
            var Revealator = NaN;
        } else {
            var Revealator = typeof Revealator !== 'undefined' ? Revealator : {};
        }
    });


    /*
    $(document).ready(function() {
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });

        $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
            $('#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                    function(){ // пoсле aнимaции
                        $(this).css('display', 'none'); // делaем ему display: none;
                        $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                    }
                );
        });
    });


    $('#modal_form').loupe();
    */

});


