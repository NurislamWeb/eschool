//**************** main slider start *****************
$('.main-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    prevArrow:'<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//**************** main slider end *******************




//**************** mentor slider start ***************
$('.mentor-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//**************** mentor slider end ***************




//**************** s-story start ********************
$(document).ready(function(){
    $('.venobox').venobox(); 
});
//**************** s-story end ***********************





//**************** s-student start *********************
$('.student-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    prevArrow:'<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//**************** s-student end ***********************





//**************** comment slider start *********************
$('.comment-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//**************** comment slider end ***********************






//**************** whom slider start *********************
$('.whom-details').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    infinite: true,
    dots: false,
    asNavFor: '.face-slider',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.face-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.whom-details',
    prevArrow:'<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-down next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          vertical: false,
          prevArrow:'<i class="fa fa-angle-left prev-1" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-angle-right next-1" aria-hidden="true"></i>',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        vertical: false,
        prevArrow:'<i class="fa fa-angle-left prev-1" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-angle-right next-1" aria-hidden="true"></i>', 
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        vertical: false,
        prevArrow:'<i class="fa fa-angle-left prev-1" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-angle-right next-1" aria-hidden="true"></i>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//**************** whom slider end ***********************




//**************** leader slider start **********************
$('.leader-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    prevArrow:'<i class="fa fa-long-arrow-right prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-long-arrow-left next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//**************** leader slider end ************************






//**************** back to top start **************************
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>500){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>1000){
    $(".btop").css("visibility","visible");
  }else{
    $(".btop").css("visibility","hidden");
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

//**************** back to top end **************************


