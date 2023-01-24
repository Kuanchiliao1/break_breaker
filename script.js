// Storing all game variables within an object to allow access by the rest of the code
let gameVariables = initializeVariables()
console.log(gameVariables)

function initializeVariables() {
  // 0, 0 should be the center
  // -250 to 250 x-axis, 500 to -500 y axis
  const ballCoordinates = {x: 0, y: 0};
  const mouseCoordinates = {x: 0, y: 0};
  const paddleCoordinates = {x: 0, y: 0};
  const canvasDimensions = {height: 1000, width: 500}
  let ballSize = 1;
  let score = 0;
  let paddleLength = 0;
  let lives = 3;

  return {
    ballCoordinates,
    mouseCoordinates,
    paddleCoordinates,
    canvasDimensions,
    ballSize,
    score,
    paddleLength,
    lives
  }
}

// Set up event listeners for user input
setUpEventListeners()

function setUpEventListeners() {
  const startBtn = document.getElementById("start-button")
  const score = document.getElementById("score")
  const bricks = document.querySelectorAll(".brick")
  
  // Start the game when clicked
  startBtn.addEventListener('click', startGame)
  // Add eventlistener to each brick, not sure what to listen for though
  bricks.forEach(brick => brick.addEventListener('', addScore))

  // Add eventlistener to detect arrow key presses. Not sure if adding eventlistener to window is the best thing to do though
  window.addEventListener('keydown', function(e) {
    const key = e.key

    // destructure paddleCoordinates from gameVariables
    const {paddleCoordinates} = gameVariables
    switch (key) {
      case "ArrowLeft":
        if (paddleCoordinates.x > -245) {
          paddleCoordinates.x -= 5
        } else {
          paddleCoordinates.x = -250
        }
        break
      case "ArrowRight":
        if (paddleCoordinates.x < 245) {
          paddleCoordinates.x += 5
        } else {
          paddleCoordinates.x = 250
        }
        break
    }
    console.log(paddleCoordinates.x)
  })

  function addScore() {
    score += 1;
  }

  function startGame() {
    // Not sure how to do this part
    initializeVariables()
    startBtn.hidden = true;
  }
}

// // Start game loop
// startGameLoop()

// // Game loop function
// function gameLoop() {
//     // Update game state
//     updateGameState()

//     // Clear canvas
//     clearCanvas()

//     // Draw elements on canvas
//     drawElements()

//     // Check for collisions
//     checkForCollisions()

//     // Check for game over
//     checkForGameOver()

//     // Repeat game loop
//     requestAnimationFrame(gameLoop)
// }

// // Update game state function
// function updateGameState() {
//     // Move ball
//     moveBall()

//     // Move paddle
//     movePaddle()
// }

// // Clear canvas function
// function clearCanvas() {
//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
// }

// // Draw elements function
// function drawElements() {
//     // Draw ball
//     drawBall()

//     // Draw paddle
//     drawPaddle()

//     // Draw bricks
//     drawBricks()
// }

// // Check for collisions function
// function checkForCollisions() {
//     // Check for ball collision with paddle
//     checkForBallPaddleCollision()

//     // Check for ball collision with bricks
//     checkForBallBrickCollision()
// }

// // Check for game over function
// function checkForGameOver() {
//     // Check if player has lost all lives
//     // Check if player has broken all bricks

//     // If game over, show game over screen
// }