class Animal {
  speak() {
    return "Animal makes a noise.";
  }
}

class Dog extends Animal {
  speak() {
    return "Dog barks."; // Overrides parent method
  }
}

class Cat extends Animal {
  speak() {
    return "Cat meows."; // Overrides parent method
  }
}

const myDog = new Dog();
const myCat = new Cat();
const genericAnimal = new Animal();

console.log(myDog.speak()); // Output: Dog barks.
console.log(myCat.speak()); // Output: Cat meows.
console.log(genericAnimal.speak()); // Output: Animal makes a noise.
