/*Add event listener to play button to call startGame function*/
document.getElementById("play-btn").addEventListener("click", startGame);

/* Start Game function:
Calls the game loop
*/
function startGame() {
    gameLoop();
}

/* 
start loop count at 0.
start spaceshipVisible to False.
Game loop function:
set spaceshipVisible to Not False.
call the flight formation function.
calls the flashing spaceship function.
increment loop count.
loop through to 12.
wait time X to call game loop again.
after 12 loop set Game over. 
*/
let loopCount = 0;
let spaceshipVisible = false;
let score = 0;
function gameLoop(){
    spaceshipVisible = !spaceshipVisible;
    spaceships();
    flashingSpaceships();
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
set the id game-area as ufoArea
loop through the child divs for every i less than 8
set the child divs innerHTML to "Alien"
set randomUfo to a random number between 1-8
(use random-1 to translate 1-8 into index count 0-7)
set the child divs innerHTML to "Rogue UFO"
set onclick feature to increment score.
apply score to the player-score div.
*/
function spaceships() {
    let  ufoArea= document.getElementById("game-area");
    for(let i=0; i < 8; i++){
        ufoArea.children[i].innerHTML = "";
        ufoArea.children[i].onclick = function(){
            score--;
            document.getElementById("player-score").innerText = "Crypto Coins: " + score * 1000;
            playAlienSound();
        }   
    }
    let randomUfo = Math.floor(Math.random() * 8) + 1;
    ufoArea.children[randomUfo-1].innerHTML = "ROGUE-UFO";
   
    ufoArea.children[randomUfo-1].onclick = function(){
        score++;
        document.getElementById("player-score").innerText = "Crypto Coins: " + score * 1000;
        playUfoSound();
    } 
}




/*flashing spaceship function
set id game-area as gameArea.
set class for CSS .visible or .invisible. Depends if spaceshipVisible is true or false.
loop through 8 child divs and set the class on each each div.
*/
function flashingSpaceships(){
    let gameArea = document.getElementById("game-area");
    let setClass = spaceshipVisible ? "spaceship visible" : "spaceship invisible";
    
    for (let i=0; i < 8; i++) {
        gameArea.children[i].className = setClass;
    }
}

function playStart() {
    var audioStart = document.getElementById("audio-start");
    audioStart.play();
  }

  function playUfoSound() {
    var audioUfo = document.getElementById("audio-ufo");
    audioUfo.play();
  }

  function playAlienSound() {
    var audioAlien = document.getElementById("audio-alien");
    audioAlien.play();
  }


/*


function countdownTimer
*/