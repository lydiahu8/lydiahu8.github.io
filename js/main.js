$(document).ready(function () {
  
  //Mobile Responsive Side Navigation Bar
  $('.sidenav').sidenav();
  
  //Collapsible Skills
  $('.collapsible').collapsible();
  
  //Type Writer
  var i = 0;
  var txt = 'Hi, I\'m Lydia Hu';
  var speed = 150;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("intro").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

  //Parallax
  $('.parallax').parallax();


})