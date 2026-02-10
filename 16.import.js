import { Employee, add, Pi, YashError } from "./15.export.js";
import { add as addFromFunctions } from "./7.functions.js"
import divideTwoNumbers from "./15.export.js"

let emp = new Employee(1, 'Yash')
console.log(emp.empId)
console.log(emp.empName)
console.log(add(2,5))
console.log(addFromFunctions(10,30))
console.log(Pi)

console.log(divideTwoNumbers(9,3))
throw new YashError('Hey I am here')