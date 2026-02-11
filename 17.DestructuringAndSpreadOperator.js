// Destructuring and Spread Operator - basic examples

// ---------- Array destructuring ----------
const numbers = [1, 2, 3, 4];
const [first,second] = numbers;
console.log('first:', first);           // 1
console.log('second:', second);         // 2

// Swap variables using array destructuring
let x = 10, y = 20;
[x, y] = [y, x];
console.log('x, y after swap:', x, y); // 20 10


// ---------- Spread operator (arrays & objects) ----------
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log('combined:', combined); // [1,2,3,4]

// Copying arrays/objects (shallow copy)
const arrCopy = [...combined];
const obj = { p: 1, q: 2 };
const objCopy = { ...obj };
console.log('arrCopy:', arrCopy);
console.log('objCopy:', objCopy);

// Merging/overriding object properties
const merged = { ...obj, q: 20, r: 3 };
console.log('merged:', merged); // { p:1, q:20, r:3 }

