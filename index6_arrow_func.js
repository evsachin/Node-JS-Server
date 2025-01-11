// Annonymous function
// Arrow / fat function

//named function
function function1(){
    console.log('named function...')
}

//calling function by function name
// function1()

// unnamed function / Annonymous function

const squere = function (number){
    return number ** 2
}
// console.log('squere of 2',squere(2))
// console.log('squere of 3',squere(3))


//named fuction

// function add(p1, p2){
//     return p1 + p2
// }

//annonymous function
const add = function (p1, p2){
    return p1 + p2
}

// console.log(add(10,20))

//Arrow Function
// in java -> lambda functions

const multiply = (p1, p2) =>{
    return p1 * p2
}

// console.log(multiply(10,2))

//note -> arrow function having only one statement in the body part
const subtract = (p1,p2) => p1 - p2

const cube = (number) => number ** 3
// console.log(cube(2))

//note -> no need of () when there is only one input parameter

const cubeOf = number => number ** 3

// console.log('cube of = ',cubeOf(2))

const divide = (p1,p2) => p1 / p2
console.log('quotient = ',divide(10,2))

//check number is even 

const isEven = number => {
    if(number % 2 == 0){
        return 'even'
    }
    return 'odd'
}

// or

const isEvenn = number => number % 2 == 0 ? 'even' : 'odd'