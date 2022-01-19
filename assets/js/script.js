/*Add event listener to play button to call startGame function*/
document.getElementById("play-btn").addEventListener("click", startGame);

/* Start Game function invokes the game loop*/
function startGame() {
    gameLoop();
}

/* Game loop function - loops through a loop count to end*/
let loopCount = 0;
function gameLoop(){
    loopCount++;
    if(loopCount < 4){
    alert("mow we're running the  loop count ")
    setTimeout(gameLoop, 2000);
}
else {
    alert("game over");
}
}






/*
function createSpacehips


function flashSpaceships

function incrementScore

function countdownTimer
*/