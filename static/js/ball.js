$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game

  var circle = {
    X: 20,   
    Y: 20,
    R: 20,
    D: 40,
    vx: 5,
    vy: 5,
  };

  var updateGame = function() {
    circle.X = circle.X + circle.vx;
    circle.Y = circle.Y + circle.vy; 
    if (circle.vy > 0 && circle.Y + circle.R >= canvas.height) 
      {
        circle.vy = -circle.vy;
      }
    if (circle.vx > 0 && circle.X + circle.R >= canvas.width) 
      {
        circle.vx = -circle.vx;
      }
    if (circle.vy < 0 && circle.Y - circle.R <= 0) 
      {
        circle.vy = -circle.vy;
      }
    if (circle.vx < 0 && circle.X - circle.R <= 0) 
      {
        circle.vx = -circle.vx;
      }     

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle= 'HotPink';
    context.beginPath();
    context.arc(circle.X, circle.Y, circle.R, 0, 2 * Math.PI);
    context.fill();
    setTimeout(updateGame, 10);
  };

  updateGame();
});


