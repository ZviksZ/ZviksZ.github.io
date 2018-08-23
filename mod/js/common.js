$(document).ready(function(){
  $('.top_slider').slick({
  		dots: true,
  		arrows: false
  });
});

$(function() {
  var pull    = $('.top-nav_burg');
    menu    = $('.top-nav_menu');
    menuHeight  = menu.height();
 
  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.toggle();
  });
});

$(window).resize(function(){
  var w = $(window).width();
  if(w > 768 ) {
    menu.removeAttr('style');
  }
}); 




