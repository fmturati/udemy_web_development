var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var scoreP1Area = document.querySelector("#scorep1");
var scoreP2Area = document.querySelector("#scorep2");
var scoreP1 = 0;
var scoreP2 = 0;
var gameOver = false;
var winningScore = 5;

var resetBtn = document.querySelector("#reset");
var score = document.querySelector("#score");
var inputArea = document.querySelector("#input");
var goal = document.querySelector("#goal");
var playTo = document.querySelector("#playTo");


p2Btn.addEventListener("click", function(){    
    if (!gameOver){
        scoreP2++;
        if(scoreP2 === winningScore){                     
            scoreP2Area.classList.add("winner");
            gameOver = true;   
        }  
        scoreP2Area.textContent = scoreP2;
    }
});

p1Btn.addEventListener("click", function(){
    if(!gameOver){
        scoreP1++
        if(scoreP1 === winningScore){                      
            scoreP1Area.classList.add("winner");
            gameOver = true; 
        } 
        scoreP1Area.textContent = scoreP1;
    }
});

function reset(){
    scoreP1 = 0;
    scoreP2 = 0;
    scoreP1Area.textContent = 0;
    scoreP2Area.textContent = 0;
    scoreP1Area.classList.remove("winner");
    scoreP2Area.classList.remove("winner");
    gameOver = false;     
}

resetBtn.addEventListener("click", function(){
     reset();
});

inputArea.addEventListener("change", function(){
    playTo.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});