$(document).ready(function(){

	// Intro slide
	$('.intro__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      dots: false,
      arrows: true,
      nextArrow: '<button class="slick-next"><i class="fa fa-angle-right fa-2x"></i></button>',
  	  prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left fa-2x"></i></button>',
  });

});