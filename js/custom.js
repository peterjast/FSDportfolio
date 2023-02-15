

$(function () {

  'use strict';

  var win = $(window);


  $.scrollIt({
    upKey: 38,               
    downKey: 40,              
    easing: 'swing',         
    scrollTime: 600,          
    activeClass: 'active',    
    onPageChange: null,      
    topOffset: -80           
  });

  $('.navbar-nav .nav-link').on('click', function () {
    $('.navbar-collapse.show').removeClass('show');
  });

  win.on('scroll', function () {
    var bodyScroll = win.scrollTop(),
        navbar = $('.navbar'),
        logo = $('.navbar .logo> img');

    if (bodyScroll > 100) {
      navbar.addClass('nav-scroll');

    } else {
      navbar.removeClass('nav-scroll');
    }
  });

  win.on('scroll', function () {
    var buttonTop = $('.button-top');
    if ($(this).scrollTop() >= 700) {
      buttonTop.show();
    } else {
      buttonTop.hide();
    }
  });

  win.on('scroll', function () {
    $('.skill-progress span').each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
          bottom_of_window = $(window).scrollTop() + $(window).height(),
          myVal = $(this).attr('data-value');
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width : myVal
        });
      }
    });
  });

  $('.counter .number').counterUp({
    delay: 10,
    time: 1500
  });

  $('.testimonials .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    autoplayTimeout: 10000
  });

  /*$('#headerVideoLink').magnificPopup({
    type:'inline',
    midClick: true,
    isActive: true
  });
*/
  $('.portfolio .gallery').magnificPopup({
    delegate: '.popup-img',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});


$(window).on('load', function () {


  $('.loading').fadeOut(500);



  var $gallery = $('.gallery').isotope({

    itemSelector: '.item'
  });

  $('.filtering').on('click', 'span', function () {
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({ filter: filterValue });
  });

  $('.filtering').on('click', 'span', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('#contact-form').validator();

  $('#contact-form').on('submit', function (e) {

    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data) {

          var messageAlert = 'alert-' + data.type,
              messageText = data.message,
              alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

          if (messageAlert && messageText) {
            $('#contact-form').find('.messages').html(alertBox);
            $('#contact-form')[0].reset();
          }
        }
      });
      return false;
    }
  });

});
