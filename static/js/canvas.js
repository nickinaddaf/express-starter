$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
$('#p1').click(function() {
  context.strokeRect(5, 5, 10, 20);
  });

$('#p2').click(function() {
  context.strokeRect(20, 20, 10, 10);
  });

$('#p3').click(function() {
  context.beginPath();
  context.arc(50, 50, 10, 0, Math.PI);
  context.stroke();
  });

$('#p4').click(function() {
  context.beginPath();
  context.arc(100, 100, 10, 0, 2 * Math.PI);
  context.stroke();
  });

$('#p5').click(function() {
  context.moveTo(15, 45);
  context.lineTo(80, 20);
  context.stroke();
  });
  });





