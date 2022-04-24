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

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  console.log(window.innerWidth);
  if (device == "xs") {
    console.log("mobile");
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.left = "0";
    } else {
      document.getElementById("navbar").style.left = "-90%";
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

function handleStart(evt) {
  evt.preventDefault();
  log('touchstart.');
  const el = document.getElementById('canvas');
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    log(`touchstart: ${i}.`);
    document.getElementById("navbar").style.left = "-90%";

  }
}

function startup() {
  const el = document.getElementById('navbar');
  el.addEventListener('touchstart', handleStart);
  el.addEventListener('touchend', handleEnd);
  el.addEventListener('touchcancel', handleCancel);
  el.addEventListener('touchmove', handleMove);
  log('Initialized.');
}

document.addEventListener("DOMContentLoaded", startup);
handleStart();