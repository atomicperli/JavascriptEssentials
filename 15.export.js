class Employee {
    empId
    empName
    constructor(empId, empName) {
        this.empId = empId
        this.empName = empName
    }
}

function add(a,b) {
    return a + b;
}

function divide(a,b) {
    return a/b
}

class YashError extends Error {

    constructor(message) {
        super(message)
    }

}

let Pi = 3.14

export default divide;
export {Employee, add, Pi, YashError}