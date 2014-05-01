$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var curLevel = 0;
  var levelText = "Level 1 - React 1 out of 5 balls"

  // PUT STUFF HERE
  var balls = [];
  var reactions = [];
  var reacting = false;
  var numReacted = 0;
  var gameState = 'menu';
  var menuText = 'Click to Play!';
  var levels = [{num: 1, minReactions: 1, numBalls: 5}, 
                {num: 2, minReactions: 3, numBalls: 7}, 
                {num: 3, minReactions: 5, numBalls: 15},
                {num: 4, minReactions: 7, numBalls: 25},
                {num: 5, minReactions: 10, numBalls: 35},
                {num: 6, minReactions: 12, numBalls: 45},
                {num: 7, minReactions: 15, numBalls: 50},
                {num: 8, minReactions: 17, numBalls: 55}, 
                {num: 9, minReactions: 20, numBalls: 60}];
  
  var numBalls = 100 
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
  }




  // Run an interation of the game
  var updateGame = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (gameState === 'menu') {
      context.fillStyle = "purple";
      context.font = "40px Arial";
      context.fillText(menuText, 50, 300);
    }
    else if (gameState === "playing") {
    for (var i = 0; i < balls.length; i++) {
        var collided = false; 
        for (var j = 0; j < reactions.length; j++) {
                var Rsum = reactions[j].R + balls[i].R;
                var xdiff = reactions[j].X - balls[i].X;
                var ydiff = reactions[j].Y - balls[i].Y;
                var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff)
                  if (dist <= Rsum) {
                    var collided = true
                  }
        }
        if (collided === true) {
          var b3 = {
            X: balls[i].X, 
            Y: balls[i].Y,
            R: 1,
            C: 'HotPink',
            T: 0,
          }
          reactions.push(b3);
          numReacted = numReacted + 1;
          balls.splice(i, 1);
          i--;
        }
    }
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
    
    for (var i = 0; i < balls.length; i = i + 1) {
      context.fillStyle= balls[i].C;
      context.beginPath();
      context.arc(balls[i].X, balls[i].Y, balls[i].R, 0, 2 * Math.PI);
      context.fill();
    }

    for (var i = 0; i < reactions.length; i = i + 1) {
      reactions[i].T++;
      if (reactions[i].T > 100) {
        reactions[i].R--;    
      } 
      else if (reactions[i].R < 30) {
        reactions[i].R++;
      }
      if (reactions[i].R <=0) {
        reactions.splice(i, 1);
          i--;
       }
      else {  
      context.fillStyle= reactions[i].C;
      context.beginPath();
      context.arc(reactions[i].X, reactions[i].Y, reactions[i].R, 0, 2 * Math.PI);
      context.fill();
      }
    }

    context.fillStyle = "green";
    context.font = "20px Arial";
    context.fillText('Reactions: ' + numReacted, 50, 50);
  
    if (reacting === true && reactions.length === 0) {
      menuText = "Game Over! You reacted " + numReacted + " balls!";
      gameState = "menu";
      if (numReacted >= levels[curLevel].minReactions) {
        curLevel = curLevel + 1;
        menuText = "Hooray! Next Level!"
        if (levels[curLevel].num === levels.length) {
          curLevel = 0
          menuText = "Hooray! You Won! You are not a failure! :)"
        }
      }
      else {
        menuText = ":( You failed. Click to try again."
      }
    }

    context.fillStyle = "green";
    context.font = "20px Arial";
    context.fillText(levelText, 300, 50);

    }

    
    setTimeout(updateGame, 10);
  };

  // Handle a canvas click event
  

  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    if (gameState === 'menu') {
      gameState = "playing";
      reacting = false;
      numReacted = 0;
      balls.splice(0,balls.length);
      var numBalls = 100 
      levelText = "Level " + levels[curLevel].num + " - React " + levels[curLevel].minReactions + " out of " + levels[curLevel].numBalls + " balls";
      for (var i = 0; i < levels[curLevel].numBalls; i = i + 1) {
      var b1 = {
      X: 100,   
      Y: 50,
      R: 10,
      C: 'CornflowerBlue',
      vx: 5 * Math.random(),
      vy: 7 * Math.random(),
      
    }
      balls.push(b1);  
  }

    }

    if (gameState === "playing" && reacting === false) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;
      // PUT STUFF HERE
        reacting = true;
        var b2 = {
        X: x,   
        Y: y,
        R: 1,
        C: 'HotPink',
        T: 0,
        }
        reactions.push(b2);
      }  
  });
  setTimeout(updateGame, 10);
});

