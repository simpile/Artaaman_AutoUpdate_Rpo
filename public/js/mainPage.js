// var iconiFy = document.createElement('script');  
// iconiFy.setAttribute('src','https://code.iconify.design/2/2.1.0/iconify.min.js');
// document.head.appendChild(iconiFy)
// var owlCar = document.createElement('script');  
// owlCar.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js');
// document.head.appendChild(owlCar)

/* -------------------------------------------------------------------------- */
/*                                  PRELOADER                                 */
/* -------------------------------------------------------------------------- */
window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }


/* -------------------------------------------------------------------------- */
/*                                AOS-ANIMATION                               */
/* -------------------------------------------------------------------------- */
AOS.init({
  // disable: "mobile",
  duration: 800,
  anchorPlacement: "center-bottom",
});

/* -------------------------------------------------------------------------- */
/*                                SMOOTH SCROLL                               */
/* -------------------------------------------------------------------------- */
// $(function () {
//   $(".nav-link").on("click", function (event) {
//     var $anchor = $(this);
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $($anchor.attr("href")).offset().top - 0,
//         },
//         1000
//       );
//     event.preventDefault();
//   });
// });

/* -------------------------------------------------------------------------- */
/*                                  OPENMENU                                  */
/* -------------------------------------------------------------------------- */
  var navbarItems = document.getElementById("myNavbar-contents");
  var icon = document.getElementsByClassName("iconify");
  navbarItems.style.display = "none";
function openNav() {

  if (navbarItems.style.display == "none") {
    navbarItems.style.display = "block";
    icon[0].style.color = "#FEBF50";
  } else {
    navbarItems.style.display = "none";
    icon[0].style.color = "#FFFFFF";
  }
}



/* -------------------------------------------------------------------------- */
/*                                   SWIPER                                   */
/* -------------------------------------------------------------------------- */

var swiper = new Swiper(".mySwiper", {
    // loop: true,
    // spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    rtl: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  
  /* -------------------------------------------------------------------------- */
  /*                            ACCORDIAN/ QUESTIOMS                            */
  /* -------------------------------------------------------------------------- */
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("acordActive");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  
  /* -------------------------------------------------------------------------- */
  /*                                NEWS-GALLERY                                */
  /* -------------------------------------------------------------------------- */
  $("#newsSlideShow").owlCarousel({
    rtl: true,
    loop: true,
    // autoplayHoverPause: true,
    // autoplay: true,
    margin: 20,
    merge: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
     425: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });
  