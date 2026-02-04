// loops.js
// Illustrative examples of JavaScript loops with console output.

console.log('--- for loop ---');
for (let i = 0; i < 5; i++) {
  console.log('i =', i);
}

console.log('\n--- for...of (arrays/iterables) ---');
const arr = ['a', 'b', 'c'];
for (const ch of arr) {
  console.log(ch);
}

console.log('\n--- for...in (object keys) ---');
const obj = { x: 1, y: 2 };
for (const key in obj) {
  console.log(key, '->', obj[key]);
}

console.log('\n--- while loop ---');
let n = 3;
while (n > 0) {
  console.log('n =', n);
  n--;
}

console.log('\n--- do...while loop ---');
let m = 0;
do {
  console.log('m =', m);
  m++;
} while (m < 2);

console.log('\n--- Iteration helpers (forEach, map) ---');
const nums = [1, 2, 3, 4];
nums.forEach((v, idx) => console.log('forEach', idx, v));
const doubled = nums.map(v => v * 2);
console.log('map ->', doubled);

console.log('\n--- filter & reduce ---');
const evens = nums.filter(v => v % 2 === 0);
console.log('filter (even) ->', evens);
const sum = nums.reduce((acc, v) => acc + v, 0);
console.log('reduce (sum) ->', sum);

console.log('\n--- break and continue ---');
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip 2
  if (i === 4) break; // stop at 4
  console.log('loop', i);
}

console.log('\n--- Iterators and while with next() ---');
const iter = nums[Symbol.iterator]();
let step = iter.next();
while (!step.done) {
  console.log('iterator value ->', step.value);
  step = iter.next();
}

// End of loops.js
