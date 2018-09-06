
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var scorep1Area = document.querySelector("#scorep1");
var scorep2Area = document.querySelector("#scorep2");
var scorep1 = 1;
var scorep2 = 1;
var reset = document.querySelector("#reset");

var score = document.querySelector("#score");

var input = 10;
var inputArea = document.querySelector("#input");

var goal = document.querySelector("#goal");

p2.addEventListener("click", function(){    
    if (scorep1 <= input-1){
        scorep2Area.textContent = scorep1++;
    } else {
        goal.textContent = "Player 2 WIN!"
        scorep2Area.style.color = "green";
    }
});