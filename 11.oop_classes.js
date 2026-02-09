class Person {

    name
    age
    qualification
    #rollNumber
    static count = 0

    constructor(name = 'Yash', age = '31', qualification = 'Automation Engineer', rollNumber = 25) {
        this.name = name
        this.age = age
        this.qualification = qualification
        this.#rollNumber = rollNumber
        Person.count = Person.count + 1;
    }

    printName() {
        console.log('The Name of this Person is ', this.name)
    }

    printRollNumber() {
        console.log(this.#rollNumber)
    }

    static printCount() {
        console.log(Person.count)
    }

    static {
        console.log('Starting of the program')
    }

}

Person.printCount()
let p = new Person('MSD', '32')
console.log(Person.count)
let p1 = new Person('Yash', '32')
Person.printCount()
let p2 = new Person('Bush', '32')
Person.printCount()