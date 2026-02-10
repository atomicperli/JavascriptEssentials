class Animal {
  name
  numberOfLimbs
  constructor(name, numberOfLimbs) {
    this.name = name
    this.numberOfLimbs = numberOfLimbs
  }
  speak() {
    return "Animal makes a noise.";
  }
}

class Dog extends Animal {
  constructor(name, numberOfLimbs) {
    super(name,numberOfLimbs)
  }
  speak() {
    return "Dog barks."; // Overrides parent method
  }
}

class Cat extends Animal {
  constructor(name, numberOfLimbs) {
    super(name,numberOfLimbs)
  }
  speak() {
    return "Cat meows."; // Overrides parent method
  }
}

const myDog = new Dog('Tommy', 4);
const myCat = new Cat('Chewy', 4);
const genericAnimal = new Animal();

console.log(myDog.numberOfLimbs)

console.log(myDog.speak()); // Output: Dog barks.
console.log(myCat.speak()); // Output: Cat meows.
console.log(genericAnimal.speak()); // Output: Animal makes a noise.
