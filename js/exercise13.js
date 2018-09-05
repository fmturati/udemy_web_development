// FIRST EXAMPLE:

// var name = "ahceclwlxo";

// for (var i = 1; i < name.length; i+=2){
//     console.log(name[i]);
// }

// EXERCISES
// 1. PRINT ALL NUMBERS BETWEEN -10 AND 19:

console.log("1. PRINT ALL NUMBERS BETWEEN -10 AND 19:");
for (var i = -10; i <= 19; i++){
    console.log(i);
}

// 2. PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40:


console.log("2. PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40:");
// for (var i = 10; i <= 40; i+=2){
//     console.log(i);
// }

for (var i = 11; i <= 40; i++){
    if (i % 2 === 0) { // if it is divisible for 2 (even number), show the console.log
        console.log(i);
    }
}

// 3. PRINT ALL ODD NUMBERS BETWEEN 300 AND 333:

console.log("3. PRINT ALL ODD NUMBERS BETWEEN 300 AND 333:");
// for (var i=300; i <= 333; i+=2){
//     console.log(i+1)
// }

for (var i = 300; i <= 333; i++){
    if (i % 2 !== 0){  // If is not divisible exactly by 2 (odd number), show the console.log (note this "!==" IS NOT EQUAL to 0 element).
        console.log(i);
    }
}

// 4. PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50:

console.log("4. PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50:");
for (var i = 5; i <= 50; i++){
    if(i % 5 === 0 & i % 3 ===0){
        console.log(i);
    }
}