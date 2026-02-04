

let marks = [90,80,100]
for(let i = 0; i < marks.length; i++ ) {
    marks[i] = marks[i] + 5
    console.log(typeof marks[i])
}

console.log(marks)

// For of || For in
for(let mark of marks) {
    console.log(mark)
}

const obj = { x: 1, y: 2 };
const details = {
    name: 'Yash',
    age: 30,
    isMale: true
}
for (const key in obj) {
  console.log(key, '->', obj[key]);
}
console.log(obj['x'])


