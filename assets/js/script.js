/*Add event listener to play button to call startGame function*/
document.getElementById("play-btn").addEventListener("click", startGame);

/* Start Game function:
calls the game loop function
calls the srat timer function
*/
function startGame() {
    gameLoop();
    startTimer();
}

/* Timer function:
counts down from 30.
displays time in timer display
*/

let time = 30;
function startTimer (){
  time = time - 1;
  document.getElementById("time-display").innerHTML = (`Time: ${time} seconds`);
  setTimeout(startTimer, 1000);
}

/* 
start loop count at 0.
spaceshipVisible begins at False.
score begins at 0
Game loop function:
set spaceshipVisible to Not False.
call the spaceships function.
call the flashing spaceship function.
increment loop count.
loop through to 12.
wait time X to call game loop again.
after loop count alert Game over. 
Auto refresh after game over alert. 
*/
let loopCount = 0;
let spaceshipVisible = false;
let score = 0;
function gameLoop(){
    spaceshipVisible = !spaceshipVisible;
    spaceships();
    // flashingSpaceships();
    loopCount++;
    if(loopCount < 15){
    setTimeout(gameLoop, 1000);
}
else {
    alert("you scored " + score * 1000 + " Crypto Coins");
    window.location.reload();
}

}/*...closing bracket game loop...........*/


/*  
spaceShips function:
retrieve the game area div and store it as ufoArea variable.
set class .visible or .invisible. to apply CSS. Depends if spaceshipVisible is true or false.
loop through the child divs for every i less than 8.
set class.
set the child divs innerHTML to "Alien".
set the decrement score onclick feature.
send the score to update the scoreboard.
call the playAliensound feature when clicked
create a random number between 1-8
(use random-1 to translate 1-8 into index count 0-7)
add .ufo class to apply ufo image.
set the child divs innerHTML to "Rogue UFO"
set onclick feature to increment score.
send the score to update the scoreboard.
call the playUfoSound feature when ufo clicked
*/
function spaceships() {
  let spaceShips= document.getElementById("game-area");
  let setClass = spaceshipVisible ? "spaceship visible" : "spaceship invisible";
  for(let i=0; i < 8; i++){
let alien = spaceShips.children[i];
alien.className = setClass;
alien.onclick = function zapAlien(){
          score--;
          document.getElementById("player-score").innerText = "Crypto Coins " + score * 1000;
          playAlienSound();
      };   
  }
let randomUfo = Math.floor(Math.random() * 8) + 1;
let ufo =  spaceShips.children[randomUfo-1];
ufo.onclick = function zapUfo(){
      score++;
      document.getElementById("player-score").innerText = "Crypto Coins " + score * 1000;
      playUfoSound();
  };
  ufo.className = setClass + " ufo";
}


/*flashing spaceship function
retrieve the game area div and store it as gameArea variable.
set class .visible or .invisible. to apply CSS. Depends if spaceshipVisible is true or false.
loop through the 8 child divs and set the class on each each div.
*/
// function flashingSpaceships(){
//     let gameArea = document.getElementById("game-area");
//     let setClass = spaceshipVisible ? "spaceship visible" : "spaceship invisible";
    
//     for (let i=0; i < 8; i++) {
//         gameArea.children[i].className = setClass;
//     }
// }

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


/*
function countdownTimer


*/