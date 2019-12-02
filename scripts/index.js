// This is a comment
// This is another Comment.

/* 
What?
It looks like a CSS comment!
Yasss.
*/

// Variables! (Storing single pieces of info.)
// turkey_legs_consumed = 3

var turkeyLegsConsumed = 3;
// 1. Prefix your variables the first time you use them.
// 2. Use camelCase!
// 3. Terminate each line with ';'

// 'var' was the original way to declare variables.
// 'let' is better because:
// It gives you more control. (You can limit it to a specific if/else
// or a specific loop.)
let turkeysCooked = 2;

// 'const' is like 'let'
// You must assign it when you declare it.
// You can never reassign it.
const numberOfTurkeysICanEat = 1;

// How to use these keywords:
// 1. By default, create your variables using 'const'
// 2. If you find out that you need to reassign it, change it to 'let'.

// print("Hello World!")
console.log("Hello World!");
console.log(`Hello World! ${turkeyLegsConsumed}`);

// print(turkeysCooked)
console.log(turkeysCooked);

// print(f"I ate {turkeysCooked}) turkeys!")
console.log(`I ate ${turkeysCooked} turkeys!`);

console.log(`Turkeys to eat: ${numberOfTurkeysICanEat - turkeysCooked}`);

// debugger;
let catName =  `Oakley`;
// petName.toUpperCase();
// When do I do upper-casing in 
// HTML or CSS or JavaScript?
// - Where ever you have control.
// - If it won't change for a looong time: HTML
// - If you can't change the HTML: CSS
// - If you get the data from a server: JavaScript
console.log(`${catName.toUpperCase()} is ${catName.length} characters long.`);
// .toUpperCase is a method(i.e., a function that belongs to an object)

const aboutMyPet = `${catName.toUpperCase()} is ${catName.length} characters long.`
console.log(aboutMyPet);

catName = "Milllaaa";
console.log(aboutMyPet);

// Stuff we'll do with collections:
// C - Create
let turkeyDinner = ["sausages ball", "turkey", "dressing", "pecan pie"];
// How do I create one list from another? Copy a list?

// R - Retrieve
console.log(turkeyDinner[2]);
// How do I retrieve a portion? ("slice" in python)
// How do I retrieve each based on a condition?
// How do I transform each item and put that into a list?

// U - Update
// turkeyDinner[1] = "Tofurkey"
// turkeyDinner[1] = "Tofurkey";

// D - Delete
// turkeyDinner.pop(1)
// del turkeyDinner[1]

// delete turkeyDinner[1];
// However, delete leaves a gap. 
// Use split() instead
// turkeyDinner.splice(1, 1);

// For python, we does this:
// for item in turkeyDinner:
//     print(f"For Turkey Day I ate: {item})

// In JavaScript
// 1. "classic for loop" (is the equivalent of python while loop)
// for (let count = 0; count < turkeyDinner.length; count++) {
//     // console.log(count);
//     console.log(`I ate ${turkeyDinner[count]}`);
// }
// console.log(`I ate ${turkeyDinner[0]}`);
// console.log(`I ate ${turkeyDinner[0]}`);
// console.log(`I ate ${turkeyDinner[0]}`);
// console.log(`I ate ${turkeyDinner[0]}`);

// 2. "new fangled" for-of loop
for (let item of turkeyDinner) {
    console.log(`I ate ${item}`)
}

// 3. (for tomorrow) .forEach and friends
//  Converting Numbers to/from Strings
// a_num = "5"
// no_really_a_number = int(a_num)
const aNum = "5F";
// const reallyANumber = Number(aNum);
const reallyANumber = parseInt(aNum, 10);
// Passing parseInt a decimal number
// results in the decimal portion being thrown away.
// parseInt("3.14", 10)

const reallyAFloat = parseFloat("3.14");

// the_original_string = str(no_really_a_number)
const theStringFive = String(reallyANumber);
const theString314 = String(reallyAFloat);

// Comparison

// In Python, this is false:
// "5" === 5

// In JavaScript, the == operator
// AUTOMATICALLY converts types

// In Javascript, user the "threequal"
"5" === 5
// `===` is the strict equality operator
// it does a double comparison.
// 1. it compares the types
// 2. then, it compares the values

5 < 6
// These are the same as Python

// and/or equivalents
const petAge = 9;

// python
// petAge < 10 and petAge > 5

// JavaScript
petAge < 10 && petAge > 5

// python's or
// petAge < 10 or petAge > 5

// In JavaScript:
petAge < 10 || petAge > 5

// Too much!
petAge < 10 && petAge > 5 || petAge === 8
const isYoungEnough = petAge < 10;
const isOldEnough = petAge > 5;
const isJustRight = petAge === 8;

// if () {}


// if/else
if (isYoungEnough && isOldEnough) {
    if (isJustRight) {
        console.log(`You are exactly the right age.`);
    } else {
        console.log(`You're cool anyway.`);
    }
}

// 1. Create an array
const array = [3, 4, 7, 9, 12, 15, 18, 22]

// 2. Loop through the array.

for (let num of array) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// The 'in' keyword would give you the indexes.
// For other kinds of collections, the `in` keyword 
// can give you "metadata".

// I want the even numbers in their own way?

const evensOnly = [];
// How do I put them in the new array?

for (let number of array) {
    if (number % 2 === 0) {
        // In Python, it's append()
        evensOnly.push(number);
    }
}

// JS doesn't care when you mix and match.
// But, there's not a good use for a mixed up array.

console.log(evensOnly);

for (let num in array) {
}

// def add(num1, num2):
//      sum = num1 + num2
//      return sum

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

console.log(add(2, 2));

console.log(add(add(2, 2), 3));