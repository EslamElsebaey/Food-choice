
$(window).load(function(){
  $(".preloader").fadeOut();
})



$(document).ready(function () { 
      
  

/***************************************************************************************** */
  // show and hide search box

  $(".openMySearch").click(function(){
    $(".search-holder-parent").toggleClass("show-search-box");
  })

  $(".closeSearh-btn").click(function(){
    $(".search-holder-parent").removeClass("show-search-box");
  })


/***************************************************************************************** */
// open and close sideBar

$(".bars").click(function(){
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})


$(".closeBtn").click(function(){
  $("nav").removeClass("reset-left");
  $("body").removeClass("overflowHidden");
})




/********************************************************************************* */


    // SWIPERS 

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

// category swiper

const category = new Swiper('.category .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  observer: true,
  observeParents: true,
 
  pagination: {
    el: '.category .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.category .swiper-button-next ',
    prevEl: '.category .swiper-button-prev',
  },

  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20  
    } , 
    990: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 29
    } , 
  }
});

// shop by deal 
const shopByDeal = new Swiper(' .shopByDeal .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.shopByDeal .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.shopByDeal .swiper-button-next ',
    prevEl: '.shopByDeal .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 30
    } 
  }
});


// shop by brand 
const brands = new Swiper('.shopByBrand .swiper', {
  loop: true,
  draggable: true,
  // autoplay: true,
  navigation: {
    nextEl: ' .shopByBrand .swiper-button-next',
    prevEl: '.shopByBrand .swiper-button-prev',
  },

  pagination: {
    el: '.shopByBrand .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 20
    } , 
    1200: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});




/********************************************************************************* */









/********************************************************************************* */

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop");
    $(".close-sec button").addClass("close-margin")
  }else{
    $(".toTop").removeClass("showToTop");
    $(".close-sec button").removeClass("close-margin")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 

/********************************************************************************* */


// Mega menu


if($(window).width() <= 992) {  
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".mega-menu").children(".container").children(".mega-items-parent").slideToggle(400) ;
    $(this).toggleClass("nav-arrow-rotate");
    })

    $(".li-drop > a").removeAttr("href");
    $(".mega-item h3").click(function(){
     $(this).siblings(".ul-es").slideToggle(300);
     $(".mega-item h3").not(this).siblings(".ul-es").slideUp(300)
     $(".mega-item h3").not(this).removeClass("nav-arrow-rotate");
     $(this).toggleClass("nav-arrow-rotate");
    })
  }
  

/********************************************************************************* */

//  nested menus in footer


if($(window).width() < 992){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }
  


/********************************************************************************* */




// FIXED NAV
    
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 40) {
    $(".search-holder-parent").removeClass("show-search-box");
    if($(window).width() > 992){
      $("header").addClass("sticky-header");
    }
  } else {
    $("header").removeClass("sticky-header");
  }
});







 })


 



