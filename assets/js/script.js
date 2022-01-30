/*......................Add event listeners ...............*/

document.getElementById("play-btn").addEventListener("click", startGame);
document.getElementById("reset-btn").addEventListener("click", refreshGame);
document.getElementById("audio-off").addEventListener("click", enableMute);
document.getElementById("audio-on").addEventListener("click", disableMute);
document.getElementById("home-btn").addEventListener("click", returnHome);


/* ......................Variables.......................*/
let loopCount = 0;
let spaceshipVisible = false;
let score = 0;
let time = 45;
let music = document.getElementById("audio-start");


/* ......................Start Game.......................*/

// Start Game function:
// if the game game loop is not running then start it (defends multi presses on start button)
// call the game loop function.
// call the start timer function
function startGame() {
  if (!loopCount) {
    gameLoop();
    startTimer();
  }
}

/* ......................Game Loop.......................*/

// set spaceshipVisible to not visible, this alternates through the loop displaying spaceships on/off 
// call spaceships function.
// increment loopcount
// Game loop function:
// loopcoount set to 33.
// wait time X to call game loop again, visible 1sec invisible 1.8sec 
// after loop count play gameover music and alert Game over with score result.
// Auto refresh after game over alert. 

function gameLoop() {
  spaceshipVisible = !spaceshipVisible;
  spaceships();
  loopCount++;
  if (loopCount < 33) {
    setTimeout(gameLoop, spaceshipVisible ? 1000 : 1800);
  } else {
    playGameOver();
    alert("you scored " + score * 1000 + " Crypto Coins");
    window.location.reload();
  }
}


/* ......................Timer feature.......................*/

// counts down from 45.
// displays time in timer display

function startTimer() {
  time = time - 1;
  document.getElementById("time-display").innerHTML = (`Timer ${time}sec`);
  setTimeout(startTimer, 1000);
}


/* ......................create flashing effect, aliens, ufo, scoring ................*/

// spaceShips function:
// retrieve the game area div and set as variable spaceShips .
// set class .visible or .invisible. to apply CSS display property. Depends if spaceshipVisible is true or false.
// loop through the 8 child divs and set as variable alien.
// set class to apply css display property - visible or invisible 
// set onclick to:
// decrement the score.
// apply the score to the scoreboard.
// play sound effect.

// create a random number between 1-8
// (use random-1 to translate 1-8 into index count 0-7)
// add .ufo class to apply ufo image.
// set onclick feature to:
// increment score.
// send the score to update the scoreboard.
// play sound effect.

function spaceships() {
  let spaceShips = document.getElementById("game-area");
  let setClass = spaceshipVisible ? "spaceship visible" : "spaceship invisible";
  //create aliens
  for (let i = 0; i < 8; i++) {
    let alien = spaceShips.children[i];
    alien.className = setClass;
    alien.onclick = function zapAlien() {
      score--;
      document.getElementById("player-score").innerText = "Crypto Coins " + score * 1000;
      playAlienSound();
    };
  }
  //create ufo
  let randomUfo = Math.floor(Math.random() * 8) + 1;
  let ufo = spaceShips.children[randomUfo - 1];
  ufo.className = setClass + " ufo";
  ufo.onclick = function zapUfo() {
    score++;
    document.getElementById("player-score").innerText = "Crypto Coins " + score * 1000;
    playUfoSound();
  };

}





/* ......................Audio mute feature.......................*/

function enableMute() {
  // let music = document.querySelectorAll("#audio-start");
  // let music = document.querySelectorAll("sound-effects");
  // let music= [document.getElementsByClassName("sound-effects")];
  // let music = document.getElementsByTagName("audio");
  music.muted = true;
}

/* ......................Audio unmute feature.......................*/

function disableMute() {
  music.muted = false;
}

/* ......................Reset Game feature.......................*/

function refreshGame() {
  window.location.reload();
}

/* ......................Return homepage.......................*/
function returnHome() {
  document.location.href = ('index.html');
}



/* ......................Sound effects.......................*/

/* sound effect for game over*/
function playGameOver() {
  let audioGameOver = document.getElementById("audio-gameover");
  audioGameOver.play();
}

/* sound effect for play button*/
function playStart() {
  let audioStart = document.getElementById("audio-start");
  let startBtn = document.getElementById("audio-start-btn");
  audioStart.play();
  startBtn.play();
}

/* sound effect for zapping ufo*/
function playUfoSound() {
  let audioUfo = document.getElementById("audio-ufo");
  let crypto = document.getElementById("audio-crypto");
  audioUfo.play();
  crypto.play();
}

/* sound effect for zapping Alien*/
function playAlienSound() {
  let audioAlien = document.getElementById("audio-alien");
  audioAlien.play();
}