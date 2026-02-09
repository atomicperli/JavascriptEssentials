class Person1 {
  name;
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

class Student extends Person1 {
  studentId  
  constructor(name, studentId) {
    super(name); // Call the parent constructor
    this.studentId = studentId;
  }
  logDetails() {
    console.log(`Name: ${this.name}, ID: ${this.studentId}`);
  }
}

const student = new Student("Alice", 12345);
student.sayName(); // Inherited method output: My name is Alice
student.logDetails(); // Child method output: Name: Alice, ID: 12345
