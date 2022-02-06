// This is your main script file

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.left = "0";
  } else {
    document.getElementById("navbar").style.left = "-30%";
  }
  prevScrollpos = currentScrollPos;
}