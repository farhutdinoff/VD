$(window).ready(function(){
  $('.owl-carousel-4').owlCarousel({
      loop:true,
      margin:20,
      autoplay:true,
      autoplayTimeout:3500,
      autoplayHoverPause:true,
      navText : ["<img src='img/slide-chevron-left.svg' alt=''>","<img src='img/slide-chevron-right.svg' alt=''>"],
      nav:true,
      responsive:{
          0:{
              items:1,
              nav:false,
          },
          600:{
              items:2,
              nav:false,
          },
          1000:{
              items:4
          }
      }
  })
  $('#menuToggle').click( function(){
    $('.nav').toggleClass("active");
    $('body').toggleClass("overflow-hidden");
  });
  if (screen.width < 960) {
    $('.phone>img').click(function() {
        $('.dropdown-number__content').slideToggle();
    });
  }


	setTimeout ("$('.main-header').show('drop');$('.main-header').addClass('show-header');",2000);
  setTimeout ("$('.section-banner__title').show('drop');$('.section-banner__title').addClass('show');",1000);
  setTimeout ("$('.section-banner__link-next').addClass('show');",4000);
  setTimeout ("$('.section-banner__title').addClass('hide-after');",5000);


  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


});
