// This is your main script file

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");
var nav_prevScrollpos = navbar.pageYOffset;

navbar.onscroll = function () {
  var currentScrollPos = navbar.pageYOffset;
  console.log(navbar.innerWidth);
  if (device == "xs") {
    console.log("mobile");
    if (nav_prevScrollpos >= currentScrollPos) {
      document.getElementById("navbar").style.left = "0";
    } else {
      document.getElementById("navbar").style.left = "-100%";
    }
  } else {
    if (nav_prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.left = "0";
    } else {
      document.getElementById("navbar").style.left = "-30%";
    }
    nav_prevScrollpos = currentScrollPos;
  }
}


var getBrowserWidth = function () {
  if (window.innerWidth < 768) {
    // Extra Small Device
    return "xs";
  } else if (window.innerWidth < 991) {
    // Small Device
    return "sm"
  } else if (window.innerWidth < 1199) {
    // Medium Device
    return "md"
  } else {
    // Large Device
    return "lg"
  }
};
var device = getBrowserWidth();

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  console.log(window.innerWidth);
  if (device == "xs") {
    console.log("mobile");
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.left = "0";
    } else {
      document.getElementById("navbar").style.left = "-100%";
    }
  } else {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.left = "0";
    } else {
      document.getElementById("navbar").style.left = "-30%";
    }
    prevScrollpos = currentScrollPos;
  }
};
