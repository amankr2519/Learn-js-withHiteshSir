// let name = "Aman"; // can be changed later
// const age = 20; // cannot be changed after being set
// var country = "India"; // avoid using var if possible


// Let’s start with variables and data types in JavaScript. These are fundamental to programming as they allow you to store and work with data in your programs.
// 1. Variables

// In JavaScript, variables are used to store values. There are three main ways to declare variables:

    // let: Declares a variable that can be updated later.
    // const: Declares a variable with a value that cannot be reassigned.
    // var: An older way to declare variables; it's less commonly used today due to some limitations.

// Here's a quick example of each:

// javascript

let name = "Aman"; // can be changed later
const age = 20; // cannot be changed after being set
var country = "India"; // avoid using var if possible

// Differences:

//     let and const were introduced in ES6 and have block scope, meaning they're only accessible within the block {} where they’re declared.
//     var has function scope, so it's accessible throughout the function it’s declared in, which can lead to unexpected results in larger codebases.

// 2. Data Types

// JavaScript has several basic data types that are divided into primitive and non-primitive (or reference) types.
// Primitive Data Types:

//     String - Represents text.

//     javascript

// let name = "Aman";

// Number - Represents both integers and floating-point numbers.

// javascript

let Studentage = 20;
let height = 5.9;

// Boolean - Represents logical values, either true or false.

// javascript

// let isStudent = true;

// Undefined - A variable that has been declared but not assigned a value.

// javascript

// let score;

// Null - Represents an intentional absence of any object value.

// javascript

// let result = null;

// Symbol (ES6) - Used for creating unique identifiers.

// javascript

//     let id = Symbol('id');

// Non-Primitive (Reference) Data Types:

//     Object - A collection of key-value pairs, which can store multiple related values.

//     javascript

// let person = { name: "Aman", age: 20 };

// Array - A special type of object used to store lists of values.

// javascript

//     let scores = [85, 90, 95];

// Example Usage:

// Here’s how we might combine variables and data types in a simple example:

// javascript

const studentName = "Aman";
let studentAge = 20;
let isGraduated = false;
let hobbies = ["coding", "reading"];
let profile = { name: studentName, age: studentAge, graduated: isGraduated };

console.log(studentName); // Output: "Aman"
console.log(profile); // Output: { name: "Aman", age: 20, graduated: false }


