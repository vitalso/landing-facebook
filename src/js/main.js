$(document).ready(function(){

	// Intro slide
	$('.intro__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      dots: false,
      arrows: false,
      /*nextArrow: '<button class="slick-next"><i class="fa fa-angle-right fa-2x"></i></button>',
  	  prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left fa-2x"></i></button>',*/
  	  autoplay: true,
  	  autoplaySpeed: 3000
  });

  // Slide to section
  $('.nav a').on('click' , function(){
    $('.nav a').removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
  });

  $('.scroll__top , .btn , .arrow__down').on('click' , function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
  });

  // Responsive nav
  if($(window).width() < 768) {
    $('.nav__btn').on('click' , function(){
      $('.nav').slideToggle();
    });
    $('.nav').on('click' , function(){
      $('.nav').slideUp();
    })
  }

  // Team Slider
  $('.team__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: false,
      dots: false,
      arrows: true,
      nextArrow: '<button class="slick-next"><i class="fa fa-angle-right fa-2x"></i></button>',
      prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left fa-2x"></i></button>',
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  // Wow animation
  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset:       0,
      mobile: false
    }
  );
  wow.init();

});