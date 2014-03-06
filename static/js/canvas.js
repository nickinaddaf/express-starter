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

$('#p6').click(function() {
  context.strokeStyle ='green';
  context.strokeRect(50, 50, 10, 20);
  });

$('#p7').click(function() {
  context.fillStyle ='red';
  context.beginPath();
  context.arc(200, 200, 10, 0, 2 * Math.PI);
  context.fill();
  });

$('#p8').click(function() {
  context.fillStyle = 'yellow';
  context.strokeStyle ='blue';
  context.fillRect(20, 20, 150, 150);
  context.strokeStyle ='blue';
  context.strokeRect(20, 20, 150, 150);
  });

$('#p9').click(function() {
	for (var i = 1; i< 251; i = 50 + i) {
		context.strokeRect(10 + i, 10, 50, 50)
	}
  });

$('#p10').click(function() {
	for (var i = 1; i< 501; i = 5 + i) {
		context.strokeRect(10 + i, 10, 5, 5)
	}
  });
  });





