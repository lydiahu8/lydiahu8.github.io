$(document).ready(function(){
  var i = 0;
  var txt = 'Hi, I\'m Lydia Hu';
  var speed = 100;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("intro").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
})