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