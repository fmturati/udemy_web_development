
// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

// LONG WAY
// function isEven(x){
//     if (x % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }


// EASY WAY 
function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));



// Write a function factorial() which takes a single numeric argument and returns the factorial of that number

function factorial(num){
    // define a result variable
    var result = 1; 
    // calculate factorial and store the value in result variable
    for (var i = 2; i <= num; i++){ 
        result *= i;
    }
    // return the result variable
    return result;
}
console.log(factorial(5)); 
console.log(factorial(2)); 
console.log(factorial(10)); 
console.log(factorial(0)); 



// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_case version

function kebabToSnake(str) {  
   var newStr = str.replace(/-/g , "_"); // store in a variable the command that will replace all '-' with '_'.
   return newStr; // call the string converted
}
console.log(kebabToSnake("This-is-a-test"));
console.log(kebabToSnake("Welcome-to-Disney"));