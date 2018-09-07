/* ========================== **
// JavaScript Design Patterns:
// var game = {}
// game.init = function(){
//     setupModeButtons();
//     setupSquares();
//     reset();
// }

// game.init();

** ======================= **/


var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector("#message");
var topHeader = document.querySelector(".header");
var resetBtn = document.querySelector("#btnReset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){       
    setupModeButtons();
    setupSquares();    
    reset();
}


function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;    
        // compare color to pickedColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "YOU GOT IT!"
            resetBtn.textContent = "PLAY AGAIN!"         
            changeColors(clickedColor);
            topHeader.style.backgroundColor = pickedColor;               
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
    } 
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("btnSelected");
            modeButtons[1].classList.remove("btnSelected");
            this.classList.add("btnSelected");            
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6; // ternary operator
            reset();
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    // pick a new random color from away
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "CLICK ANY COLOR:"; 
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    topHeader.style.backgroundColor = "#46bdf3";    
}


resetBtn.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for (var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++){
    // get random color and push into arr
    arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 to 255
    var red = Math.floor(Math.random() * 256);
    // pick a "green" from 0 to 255
    var green = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

