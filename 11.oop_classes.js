class Person {

    name
    age
    qualification

    constructor(name = 'Yash', age = '31', qualification = 'Automation Engineer') {
        this.name = name
        this.age = age
        this.qualification = qualification
    }

}

let p = new Person('MSD', '32')

console.log(p.name)
console.log(p.age)
console.log(p.qualification)