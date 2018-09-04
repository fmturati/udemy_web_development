var userName = prompt("Please, insert your name:");
var lastName = prompt("Insert your last name:");
var fullName = userName + " " + lastName;
var age = prompt("Insert your age:");
var  daysOfLife = age * 365;

var message = document.querySelector('#message');

message.innerHTML = 'Welcome ' + fullName + ", you have " + age + " years old. You lived almost " + daysOfLife + " days.";