$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
   context.fillStyle=color;
   context.fillRect(x, y, sideLen, sideLen);    
  };

  var drawCircle = function(x, y, radius, color) {
    context.fillStyle=color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
  };

  var drawCircleStroke = function(x, y, radius, color) {
    context.strokeStyle=color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
  };

  var drawSquareStroke = function(x, y, sideLen, color) {
  context.strokeStyle =color;
  context.strokeRect(x, y, sideLen, sideLen); 
  };

  // Write drawTriplet function here
 var drawTriplet = function(x,y) {
    drawCircleStroke(x, y, 50, 'blue');
    
    drawCircleStroke(x, y - 50, 50, 'green');
    drawCircleStroke(x + 50, y, 50, 'green');
    drawCircleStroke(x - 50, y, 50, 'green');
    drawSquareStroke(x - 50, y - 50, 100, 'red');
  };

  var drawTripletCircle = function(x, y, color) {
    drawCircleStroke(x, y, 50, color );
    drawCircleStroke(x + 35, y + 55, 50, color);
    drawCircleStroke(x - 35, y + 55, 50, color);
  };

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  $('#p5').click(function() {
    drawTriplet(300, 100);
  });

$('#p6').click(function() {
    drawTripletCircle(150, 150, 'green');
  });

$('#p7').click(function() {
    drawTripletCircle(200, 300, 'blue');
  });

$('#p8').click(function() {
    drawTripletCircle(100, 100, 'pink');
    drawTripletCircle(100, 300, 'purple');
    drawTripletCircle(300, 100, 'orange');
    drawTripletCircle(300, 300, 'yellow');

  });

});
