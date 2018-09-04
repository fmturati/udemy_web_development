// 1. Print all numbers between -10 and 19;

var numbers = -10;
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
while (numbers < 19){
    console.log(numbers);
    numbers++;
}


// 2. Print all numbers between 10 and 40;

var numbers = 10;
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
while (numbers <= 40){
    console.log(numbers);
    numbers+=2;
}

// 3. Print all odd numbers between 300 and 333;

var numbers = 300;
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
while (numbers <= 333){
    if(numbers % 2 !== 0){
        console.log(numbers);
    }
    numbers+=1;
}
// while (numbers >= 300 && numbers <=333 ){
//     console.log(numbers+1);
//     numbers+=2;
// }



// 4. Print all numbers divisible by 5 AND 3 between 5 and 50;

var numbers = 5;
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
while (numbers <= 100){
    if (numbers % 5 === 0 && numbers % 3 === 0){
    console.log(numbers);
    }
    numbers++;
}