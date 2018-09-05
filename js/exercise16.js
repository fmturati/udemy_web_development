var fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("SLICE()");
console.log(fruits.slice(1,4)); // "Banana", "Orange", "Mango"

fruits.push("Lemon");
console.log("USING PUSH() =>" + fruits) // "Apple", "Banana", "Orange", "Mango", "Lemon"

fruits.pop();
console.log("USING POP => " + fruits) // "Apple", "Banana", "Orange", "Mango"

fruits.unshift("Avocado");
console.log("USING UNSHIFT() => " + fruits); // "Avocado", "Apple", "Banana", "Orange", "Mango"

fruits.shift();
console.log("USING SHIFT() => " + fruits); // "Apple", "Banana", "Orange", "Mango"


var numbers = [22, 33, 43, 12, 1, 334];
console.log("USING ARRAY LENGTH INSIDE AN ARRAY: numbers[numbers.length]:")
console.log(numbers[numbers.length]); // undefined
console.log(numbers[numbers.length - 1]); // 334



var friends = [
    ["Firmino", "Salah", "Mane", "Keita"],
    ["Jesus", "Aguero", "Sane"],
    ["Lukaku", "Ibra", "Martial"]
];

console.log(friends[2][0]); // Lukaku
console.log(friends[1][2]); // Sane
