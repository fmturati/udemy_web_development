// create secretNumber
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Give your shoot!");
var guess = Number(stringGuess);

// check if guess is right
if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT! YOU'RE AWESOME!")
}
// checking if guess is higher
 else if (guess < secretNumber) {
    alert("Wrong! Try something bigger...")
} 
// checking if guess is higher
else {
    alert("Almost.. Try something less...")
}