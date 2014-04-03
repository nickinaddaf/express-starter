$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = [];
  
  var b0 = {
    X: 20,   
    Y: 20,
    R: 20,
    C: 'HotPink',
  };

  var b1 = {
    X: 100,   
    Y: 50,
    R: 50,
    C: 'CornflowerBlue',
  };

  var b2 = {
    X: 300,   
    Y: 100,
    R: 100,
    C: 'MediumPurple',
  };

  balls.push(b0);
  balls.push(b1);
  balls.push(b2);

  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i = i + 1) {
      context.fillStyle= balls[i].C;
      context.beginPath();
      context.arc(balls[i].X, balls[i].Y, balls[i].R, 0, 2 * Math.PI);
      context.fill();
  }
    setTimeout(updateGame, 10);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});

