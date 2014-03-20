$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
  var x = 20

  var updateGame = function() {
    x = x + 5
    context.fillStyle= 'HotPink';
    context.beginPath();
    context.arc(x, 20, 20, 0, 2 * Math.PI);
    context.fill();
    setTimeout(updateGame, 10);
  };

  updateGame();
});
