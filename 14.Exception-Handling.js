let a = 1

class YashError extends Error {

    constructor(message) {
        super(message)
    }

}


try {
    if(typeof a == 'number') {
        throw new YashError('a is not a string')
    }
    console.log(a.toUpperCase())
    console.log('Hey next line')
}
catch(error) {
    console.log(typeof error)
    console.log(error.message)
    console.log('Got a number instead of string')
}
finally {
    console.log('Hey next line')
}


