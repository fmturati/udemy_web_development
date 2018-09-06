// Exercise 1 - printReverse()
// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself);

function printReverse(arr){ // arr = arguments, could be any other name.
    for (var i = arr.length-1; i >= 0; i--){ // loop for the end of the array to the beginning. We have to add the "-1" because our index always starts with "0"
        console.log(arr[i]);
    }
}
    
printReverse([3,2,15,6]);
printReverse(["a", "b", "c"]);


// Exercise 2 - isUniform()
// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

function isUniform(arr){
    var first = arr[0];
    for (var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    } return true;
}
// to check, go to console on chrome and test: 
// isUniform([1,1,1,1]);        true
// isUniform([1,2,2,1]);        false
// isUniform([2,3,5,1]);        false
// isUniform([2,2,2,2,2,2,2]);  true



// Exercise 3 - sumArray()
// Write a function sumArray() that accepts and array of numbers and returns the sum of all numbers in the array

function sumArray(arr){
    var total = 0;
    arr.forEach((item)=> {
        total += item;     
    });    
    return total;      
} 

console.log("The result is of 2 + 3 + 4 is " + sumArray([2,3,4]));


// Exercise 4 - max():
// Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(arr){
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}



// REPLICATING THE FUNCTION
function checkUniform(arr){
    var firstItem = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== firstItem){
            return false;
        }
    }
    return true;
}

console.log(checkUniform([1,2,2,2,2])); // false
console.log(checkUniform([1,1,1,1])); //true

// REPLICATING THE FUNCTION
function reverseOrder(arr){
    for (var i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
}

reverseOrder(["f","m","t"]);


// REPLICATING THE FUNCTION 
function somar(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += arr[i];
    } return total;
}

console.log(somar([2,3,3,2]))


// REPLICATING THE FUNCTION
function biggerThan(arr){
    var bigger = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > bigger){
            bigger = arr[i]
        }
    } return bigger;
}

console.log("The biggest number is " + biggerThan([2,4,66,11,223]));