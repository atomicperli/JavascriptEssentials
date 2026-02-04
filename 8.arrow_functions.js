// arrow_functions.js
// Examples: anonymous functions, arrow syntax, concise vs block, `this` differences

console.log('--- Anonymous function assigned to a variable ---');
const anon = function (x) {
  return x * 2;
};
console.log('anon(4) ->', anon(4));

console.log('\n--- Arrow function (concise body) ---');
const double = x => x * 2; // single param, implicit return
console.log('double(5) ->', double(5));

console.log('\n--- Arrow function (block body) ---');
const sum = (a, b) => {
  const s = a + b;
  return s;
};
console.log('sum(2,3) ->', sum(2, 3));

console.log('\n--- Returning object literal ---');
const makePoint = (x, y) => ({ x, y });
console.log('makePoint(1,2) ->', makePoint(1, 2));

console.log('\n--- No `arguments` in arrow functions (use rest) ---');
const showArgs = (...args) => args;
console.log('showArgs(1,2,3) ->', showArgs(1, 2, 3));

console.log('\n--- `this` behavior difference ---');
const obj1 = {
  value: 10,
  method: function () {
    console.log('regular this.value ->', this.value);
  }
};
const obj2 = {
  value: 20,
  method: () => {
    console.log('arrow this.value ->', this.value); // `this` is lexical (likely undefined/global)
  }
};
obj1.method();
obj2.method();

console.log('\n--- Arrow as concise callbacks ---');
const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log('squares ->', squares);

console.log('\n--- Immediately-invoked function expression (IIFE) with arrow ---');
(() => console.log('IIFE using arrow'))();

// End of arrow_functions.js
