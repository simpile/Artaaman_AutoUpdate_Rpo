var iconiFy = document.createElement('script');  
iconiFy.setAttribute('src','https://code.iconify.design/2/2.1.0/iconify.min.js');
document.head.appendChild(iconiFy)


/* -------------------------------------------------------------------------- */
/*                                AOS-ANIMATION                               */
/* -------------------------------------------------------------------------- */
AOS.init({
  // disable: "mobile",
  duration: 800,
  anchorPlacement: "center-bottom",
});


/* -------------------------------------------------------------------------- */
/*                                  NAVBAR                                  */
/* -------------------------------------------------------------------------- */

// TOGGLE NAVBAR

const navbarItems = document.getElementById("myNavbar-contents");
const hamburger = document.querySelector(".iconify");
const closeIcn = document.querySelector(".close");
navbarItems.style.display = "none";
closeIcn.style.display = "none";
hamburger.style.display = "block";

function toggleNav() {
  console.log("Before:", navbarItems.style.display, hamburger.style.display, closeIcn.style.display);
  navbarItems.style.display = (navbarItems.style.display === "none") ? "block" : "none";
  const isNavbarHidden = navbarItems.style.display === "none";
  hamburger.style.display = isNavbarHidden ? "block" : "none";
  closeIcn.style.display = isNavbarHidden ? "none" : "block";
  console.log("After:", navbarItems.style.display, hamburger.style.display, closeIcn.style.display);
}

[hamburger, closeIcn].forEach(btn => {
  btn.addEventListener("click", toggleNav);
});


// //  HIDE ON SCROLL
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || navbarItems.style.display === "block") {
    document.getElementById("myNavbar").style.top = "0";
  } else {
    document.getElementById("myNavbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}