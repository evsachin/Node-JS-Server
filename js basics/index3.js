// 2. Paramterless function

// functio declaration nd fuction definition
function myFunction(){
    console.log('inside myFunction')
}

// function call
// myFunction()

function myFunction2(p1){
    console.log('p1 = ',p1)
    console.log('type of p1 = ', typeof p1)
}

// p1 = undefined
// myFunction2()

// myFunction2()

// Parameterized function

function myFunction3(p1, p2){
    const addition = p1 + p2
    console.log('addition = ', addition)
}

// myFunction3(2,34)

//string concatenation
// myFunction3('mathematical ','Addition')

//string concatenation
//Note :  [if one of the operand is string then string concatnation wil be used]
// myFunction3(10,'Addition')


// function with parameters with default values
// Rule : [if parameter is not passed then default value is used]
// Rule : [if value for  parameter is passed then function will use the passed values]

function myFunction4(p1, p2 = 20, p3 = 30, p4 = 40){
    console.log('p1 = ',p1)
    console.log('p2 = ',p2)
    console.log('p3 = ',p3)
    console.log('p4 = ',p4)
}

myFunction4()
myFunction4(10,20)


