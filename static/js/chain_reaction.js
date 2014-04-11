$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = [];
  var reactions = [];
  
  var numBalls = 300 
    for (var i = 0; i < numBalls; i = i + 1) {
      var b1 = {
      X: 100,   
      Y: 50,
      R: 10,
      C: 'CornflowerBlue',
      vx: 5 * Math.random(),
      vy: 7 * Math.random(),
    }
      balls.push(b1);  
  };




  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i = i + 1) {
      balls[i].X = balls[i].X + balls[i].vx;
      balls[i].Y = balls[i].Y + balls[i].vy; 
      if (balls[i].vy > 0 && balls[i].Y + balls[i].R >= canvas.height) 
        {
          balls[i].vy = -balls[i].vy;
        }
      if (balls[i].vx > 0 && balls[i].X + balls[i].R >= canvas.width) 
        {
          balls[i].vx = -balls[i].vx;
        }
      if (balls[i].vy < 0 && balls[i].Y - balls[i].R <= 0) 
        {
          balls[i].vy = -balls[i].vy;
        }
      if (balls[i].vx < 0 && balls[i].X - balls[i].R <= 0) 
        {
          balls[i].vx = -balls[i].vx;
        }
    }    
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < balls.length; i = i + 1) {
      context.fillStyle= balls[i].C;
      context.beginPath();
      context.arc(balls[i].X, balls[i].Y, balls[i].R, 0, 2 * Math.PI);
      context.fill();
    }

    for (var i = 0; i < reactions.length; i = i + 1) {
      context.fillStyle= reactions[i].C;
      context.beginPath();
      context.arc(reactions[i].X, reactions[i].Y, reactions[i].R, 0, 2 * Math.PI);
      context.fill();
      if (reactions[i].R < 30) {
        reactions[i].R = reactions[i].R + 1;
      }
    }

    setTimeout(updateGame, 10);
  };

  // Handle a canvas click event
  

  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
      var b2 = {
      X: x,   
      Y: y,
      R: 1,
      C: 'HotPink',
    }
      reactions.push(b2);
  });
  setTimeout(updateGame, 10);
});

