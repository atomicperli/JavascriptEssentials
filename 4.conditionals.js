// conditionals.js
// Examples of JavaScript conditional statements with outputs.

console.log('--- if statement ---');
const temp = 25;
if (temp > 30) {
  console.log('It\'s hot outside');
}
if (temp > 20) console.log('It\'s warm outside');

console.log('\n--- if / else ---');
const hour = 10;
if (hour < 12) {
  console.log('Good morning');
} else {
  console.log('Good afternoon');
}

console.log('\n--- else if chain ---');
const score = 75;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 75) {
  console.log('Grade: B');
} else if (score >= 60) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}

console.log('\n--- Nested conditionals ---');
const user = { name: 'Alex', isAdmin: false };
if (user) {
  if (user.isAdmin) {
    console.log('Show admin panel');
  } else {
    console.log('Show user dashboard');
  }
}

console.log('\n--- switch statement ---');
const color = 'green';
switch (color) {
  case 'red':
    console.log('Stop');
    break;
  case 'green':
    console.log('Go');
    break;
  case 'yellow':
    console.log('Caution');
    break;
  default:
    console.log('Unknown color');
}

console.log('\n--- Conditional (ternary) expression ---');
const points = 120;
const level = (points > 100) ? 'pro' : 'beginner';
console.log('level ->', level);

console.log('\n--- Logical short-circuit for defaults ---');
function greet(name) {
  const displayName = name || 'Guest';
  console.log('Hello,', displayName);
}
greet('Sam');
greet(null);

// End of conditionals.js
