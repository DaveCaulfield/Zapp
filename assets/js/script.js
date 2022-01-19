function startGame(){
    gameLoop();
    }
   let numLoops = 0;
    function gameLoop(){
        numLoops++;
        if(numLoops < 10) {
        alert("game loop running");
        setTimeout(gameLoop, 2000);
        }
        else{
            alert("Game Over")
        }

    }
           
        
    