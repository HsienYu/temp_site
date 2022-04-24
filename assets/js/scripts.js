// This is your main script file

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;


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

window.onload = function () {
  if (device == "xs") {
    // document.getElementById("navbar").style.width = "70%";
  } else {
    // document.getElementById("navbar").style.width = "100%";
  }
};

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  console.log(window.innerWidth);
  console.log(currentScrollPos);
  if (device == "xs") {
    console.log("mobile");
    if (prevScrollpos > currentScrollPos) {
      navbar.style.left = "0";
    } else {
      navbar.style.left = "-25%";
    }
  } else {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.left = "0";
    } else {
      navbar.style.left = "-15%";
    }
    prevScrollpos = currentScrollPos;
  }
};
