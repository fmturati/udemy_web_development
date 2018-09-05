// Exercise about prompt command using while

// FIRST METHOD:

// var answer = prompt("Are we there yet?");
// var message = document.querySelector("#message");

// while (answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("Are we there yet?");
// }

// message.innerHTML = "YEAH, WE ARE THERE!";

// SECOND METHOD USING INDEX OF:

var answer = prompt("Are we there man?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there man?");
}

message.innerHTML = "YEAH, WE ARE THERE!";