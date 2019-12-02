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














