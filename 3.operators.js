// operators.js
// Illustrative examples of JavaScript operators with console output.

console.log('--- Arithmetic Operators ---');
const a = 10;
const b = 3;
console.log('a + b =', a + b); // 13
console.log('a - b =', a - b); // 7
console.log('a * b =', a * b); // 30
console.log('a / b =', a / b); // 3.333...
console.log('a % b =', a % b); // 1
console.log('a ** b =', a ** b); // 1000

console.log('\n--- Assignment Operators ---');
let x = 5;
console.log('x =', x);
x += 2; // x = x + 2
console.log('x += 2 ->', x);
x *= 3; // x = x * 3
console.log('x *= 3 ->', x);

console.log('\n--- Increment / Decrement ---');
let i = 0;
console.log('i =', i);
console.log('i++ ->', i++); // returns 0, then i becomes 1
console.log('after i++ i =', i);
console.log('++i ->', ++i); // increments to 2, returns 2

console.log('\n--- Comparison Operators ---');
console.log('a == "10" ->', a == '10'); // true (type coercion)
console.log('a === "10" ->', a === '10'); // false (strict)
console.log('a != 5 ->', a != 5); // true
console.log('a > b ->', a > b); // true

console.log('\n--- Logical Operators ---');
const truthy = true;
const falsy = false;
console.log('truthy && falsy ->', truthy && falsy); // false
console.log('truthy || falsy ->', truthy || falsy); // true
console.log('!truthy ->', !truthy); // false

console.log('\n--- Ternary Operator ---');
const age = 20;
const access = (age >= 18) ? 'granted' : 'denied';
console.log('access ->', access);

// End of operators.js
