// arrays.js
// Illustrative examples of JavaScript arrays and common methods.

console.log('--- Array creation ---');
const a1 = [1, 2, 3];
const a2 = Array.from('abc');
const a3 = new Array(3).fill(0);
console.log('a1 ->', a1);
console.log('a2 ->', a2);
console.log('a3 ->', a3);

console.log('\n--- Adding / Removing ---');
a1.push(4); // [1,2,3,4]
console.log('after push ->', a1);
const last = a1.pop();
console.log('pop ->', last, 'array ->', a1);
a1.unshift(0); // add at start
console.log('after unshift ->', a1);
const first = a1.shift();
console.log('shift ->', first, 'array ->', a1);

console.log('\n--- Splice / Slice ---');
const base = [10, 20, 30, 40];
const removed = base.splice(1, 2, 99); // remove 20,30; insert 99
console.log('after splice ->', base, 'removed ->', removed);
const part = base.slice(1, 3);
console.log('slice ->', part);

console.log('\n--- concat / spread ---');
const merged = [...a1, ...base];
console.log('merged ->', merged);

console.log('\n--- Searching ---');
console.log('indexOf 99 ->', merged.indexOf(99));
console.log('includes 20 ->', merged.includes(20));
console.log('find (>20) ->', merged.find(v => v > 20));

console.log('\n--- Iteration ---');
merged.forEach((v, i) => console.log('forEach', i, v));
const strs = merged.map(v => `#${v}`);
console.log('map ->', strs);

console.log('\n--- Filter / Reduce ---');
const large = merged.filter(v => v > 20);
console.log('filter (>20) ->', large);
const total = merged.reduce((acc, v) => acc + v, 0);
console.log('reduce (total) ->', total);

console.log('\n--- Some / Every ---');
console.log('some >100 ->', merged.some(v => v > 100));
console.log('every >0 ->', merged.every(v => v > 0));

console.log('\n--- Join / Reverse / Sort ---');
console.log('join ->', merged.join('-'));
const rev = [...merged].reverse();
console.log('reverse ->', rev);
const sorted = [...merged].sort((x, y) => x - y);
console.log('numeric sort ->', sorted);

console.log('\n--- Destructuring and rest ---');
const [firstElem, ...restElems] = merged;
console.log('firstElem ->', firstElem, 'restElems ->', restElems);

console.log('\n--- Multidimensional arrays ---');
const matrix = [ [1,2], [3,4] ];
console.log('matrix[1][0] ->', matrix[1][0]);

// End of arrays.js
