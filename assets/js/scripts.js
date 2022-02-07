// This is your main script file

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var getBrowserWidth = function(){
  if(window.innerWidth < 768){
      // Extra Small Device
      return "xs";
  } else if(window.innerWidth < 991){
      // Small Device
      return "sm"
  } else if(window.innerWidth < 1199){
      // Medium Device
      return "md"
  } else {
      // Large Device
      return "lg"
  }
};
var device = getBrowserWidth();

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(window.innerWidth);
  if (device == "xs") {
    console.log("mobile");
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.left = "0";
    } else {
      document.getElementById("navbar").style.left = "-90%";
    }
  }else{
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.left = "0";
    } else {
      document.getElementById("navbar").style.left = "-30%";
    }
  }
  prevScrollpos = currentScrollPos;
}