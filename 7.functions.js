// functions.js
// Examples: function declarations, expressions, default params, rest params, hoisting

console.log('--- Function Declaration (hoisted) ---');
console.log('call before declaration ->', add(2, 3)); // works because declarations are hoisted
function add(x, y) {
  return x + y;
}

console.log('\n--- Function Expression (not hoisted) ---');
const multiply = function (x, y) {
  return x * y;
};
console.log('multiply ->', multiply(3, 4));

console.log('\n--- Default Parameters ---');
function greet(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}
console.log(greet());
console.log(greet('Asha'));
console.log(greet('Asha', 'Welcome'));

console.log('\n--- Rest Parameters and spread ---');
function sumAll(...numbers) {
  return numbers.reduce((s, n) => s + n, 0);
}
console.log('sumAll(1,2,3,4) ->', sumAll(1, 2, 3, 4));
const arr = [5, 6, 7];
console.log('sumAll(...arr) ->', sumAll(...arr));

console.log('\n--- Returning functions (closures) ---');
function makeAdder(a) {
  return function (b) {
    return a + b;
  };
}
const addFive = makeAdder(5);
console.log('addFive(3) ->', addFive(3));

console.log('\n--- Early return pattern ---');
function divide(a, b) {
  if (b === 0) return null; // guard
  return a / b;
}
console.log('divide(6,2) ->', divide(6, 2));
console.log('divide(6,0) ->', divide(6, 0));

// End of functions.js
