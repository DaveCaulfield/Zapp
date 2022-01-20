/*Add event listener to play button to call startGame function*/
document.getElementById("play-btn").addEventListener("click", startGame);

/* Start Game function invokes the game loop*/
function startGame() {
    gameLoop();
}

/* Game loop function:
loops through a loop count
calls the flashing spaceship function*/
let loopCount = 0;
let spaceshipVisible = false;
function gameLoop(){
    spaceshipVisible = !spaceshipVisible;
    flashingSpaceships();
    loopCount++;
    if(loopCount < 12){
    setTimeout(gameLoop, 1000);
}
else {
    alert("game over");
}
}


/*  
flight formation function.
set the game-area to ufoArea
loop through the child divs for every i less than 8
set the child divs innerHTML to "Alien"
set randomUfo to a random number between 1-8
(use random-1 to translate 1-8 into index count 0-7)
set the child divs innerHTML to "Rogue UFO"
*/
function flightFormation() {
    let  ufoArea= document.getElementById("game-area");
    for(let i=0; i < 8; i++){
        ufoArea.children[i].innerHTML = "Alien";
    }
    let randomUfo = Math.floor(Math.random() * 8) + 1;
    ufoArea.children[randomUfo-1].innerHTML = "Rogue UFO";
}




/*flashing spaceship function*/
function flashingSpaceships(){
    let gameArea = document.getElementById("game-area");
    let setClass = spaceshipVisible ? "spaceship visible" : "spaceship invisible";
    
    for (let i=0; i < 8; i++) {
        gameArea.children[i].className = setClass;
    }
}









/*
function createSpacehips


function flashSpaceships

function incrementScore

function countdownTimer
*/