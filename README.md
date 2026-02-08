# JavascriptEssentials

## Object-Oriented Concepts

- **Class:** A blueprint for creating objects that groups data (properties) and behavior (methods). In modern JavaScript, classes are created with the `class` keyword and provide a clean syntax over prototype-based patterns.

- **Object:** A concrete instance created from a class (or directly as an object literal). Objects hold state in properties and expose behavior via methods.

- **Constructor:** A special method that runs when an object is created. In JavaScript classes the constructor is defined with the `constructor(...)` method and typically initializes the instance properties.

- **Constructor overloading:** Traditional constructor overloading (multiple constructors with different signatures) isn't supported in JavaScript. Instead, common patterns to achieve similar results are:
  - Use optional/default parameters in the constructor.

### Small examples

1) Class and constructor with default parameters:

```js
class User {
  constructor(name = 'Guest', age = 0) {
    this.name = name;
    this.age = age;
  }
}

const u1 = new User(); // Guest, 0
const u2 = new User('Asha', 25);
```

## Definitions: static variable, block, function

- **Static variable (class-level):** A property declared on the class itself (using the `static` keyword or by assigning to the constructor). Static variables are shared by all instances and accessed via the class, not `this`.

```js
class Counter {
  static instances = 0;
  constructor() { Counter.instances++; }
}
new Counter();
new Counter();
console.log(Counter.instances); // 2
```