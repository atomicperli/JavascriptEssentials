// 3.DataTypes.js
// Examples based on Documentation/3.DataTypes.md

// Variables
let age = 25;              // Can be changed later
const name = "John";      // Constant value
var city = "New York";    // Older style (avoid)

console.log("age:", age);
console.log("name:", name);
console.log("city:", city);

// Strings
let greeting = "Hello";
let message = 'Welcome to JavaScript';
let template = `Hello, ${greeting}`; // Template literal
console.log(greeting);
console.log(message);
console.log(template);

// Numbers
let price = 19.99;
let negative = -10;
console.log("sum:", age + price);

// Booleans
let isStudent = true;
let hasLicense = false;
console.log(isStudent, hasLicense);

// Undefined
let value;
console.log("value:", value); // undefined

// Null
let data = null;
console.log("data:", data); // null

// Object
let person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log("person.name:", person.name);
console.log("person.age:", person.age);

// Array
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true];
console.log("first color:", colors[0]);
console.log("numbers length:", numbers.length);

// Function
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice"));

// typeof checks
console.log(typeof 25);           // number
console.log(typeof "hello");    // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function

// Type conversion
let text = "42";
let number = Number(text);
console.log("Number(text):", number);

let num = 42;
let textNum = String(num);
console.log("String(num):", textNum);

console.log("Boolean(1):", Boolean(1));
console.log("Boolean(0):", Boolean(0));
console.log('Boolean(""):', Boolean(""));
console.log("Boolean('hello'):", Boolean("hello"));

// Practice exercise
let studentName = "Sarah";
let studentAge = 28;
let isEmployed = true;
let skills = ["JavaScript", "Python", "HTML"];

console.log("Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Employed: " + isEmployed);
console.log("First skill: " + skills[0]);
console.log("Number of skills: " + skills.length);
