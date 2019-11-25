$( document ).ready(function() {


  //Arrow
  setInterval(function(){
    $("#arrow_down").animate({
                      bottom: '100px'
                    }, 1500)
                    .animate({
                      bottom: '50px'
                    }, 1500)
  }, 0); 

  //Scroll showing

  var timer;
  $(window).on('scroll', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      showNext();
    }, 0);
  });

  showNext();

  function showNext() {
    let mini = $(".gallery__mini-item");

    if( $(document).scrollTop() > 500 ) {
      $('#gallery__description-title').fadeIn(800);
    }
    if( $(document).scrollTop() <= 500 ) {
      $('#gallery__description-title').fadeOut(800);
    }

    if( $(document).scrollTop() > 600 ) {
      $('#gallery__description-text').fadeIn(800);
    }
    if( $(document).scrollTop() <= 600 ) {
      $('#gallery__description-text').fadeOut(800);
    }


    if( $(document).scrollTop() > 700 ) {
      $(mini[0]).stop().fadeIn(800);
    }
    if( $(document).scrollTop() <= 700 ) {
      $(mini[0]).fadeOut(800);
    }

    if( $(document).scrollTop() > 800 ) {
      $(mini[1]).fadeIn(800);
    }
    if( $(document).scrollTop() <= 800 ) {
      $(mini[1]).fadeOut(800);
    }

    if( $(document).scrollTop() > 900 ) {
      $(mini[2]).fadeIn(800);
    }
    if( $(document).scrollTop() <= 900 ) {
      $(mini[2]).fadeOut(800);
    }

    if( $(document).scrollTop() <= 500) {
      $(".gallery__mini-more").fadeOut(800);
      $("#less").hide();
      $("#more").show();
    }
  }


  // Less-More

  $("#less").hide();
  $(".gallery__mini-more").hide();

  $('#more').on('click', function(e) { 
    $(".gallery__mini-more").show(700);
    $("#less").delay(800).show(1);
    $(this).hide();
  });

  $('#less').on('click', function(e) { 
    $(".gallery__mini-more").hide(700);
    $("#more").delay(710).show(1);
    $(this).hide();
  });

  // Slick
  $('.gallery__slick').slick({
    autoplay: false,
    autoplaySpeed: 3100,
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    pauseOnDotsHover: true,
  });

  // Click gallery.
  
  $(".defocused").fadeOut();
  $(".gallery__slick").fadeOut();
  $(".active").fadeIn();

  $('.gallery__mini-item').on('click', function(e) {      
    let num = $(this).index(),
        minis = $('.gallery__mini'),
        gallery = $(".gallery__slick");

    $(".active").fadeOut(200);  
    $(".defocused").fadeOut(200);
    $(".gallery__slick").fadeOut(200);

    if( $(this).parent().hasClass( "gallery__mini-more" ) ) {
      num += 3;
    }; 
    
    $(gallery[num]).delay(150).fadeIn(600);
    $(gallery[num]).prev().delay(450).fadeIn(600);     
  });

});
