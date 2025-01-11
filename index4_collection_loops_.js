// array
// - collection of values

// Inventor of
// c - Dennis Ritche (1970)
// c++ - Bjarne Stroustrup (1979)
// Objective C - Brad Cox and Tom Love (1980)
// python - Guido van Rossum (1991)
// Javascript - Brendan Eich (1995)
// C sharp - Anders Hejlsberg (2000)
// Swift - Chris Lattner (2010)


// Loops
// types
// 1. traditional loop
// 2. for..of loop
// -> gives value
// 3. for..in loop
//  -> gives index (position)

function fuction1() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50];
  console.log(numbers);

  // array of strings
  const countries = ["India", "USA", "Japan"];
  console.log(countries);
}

// fuction1()

function function2() {
  const numbers = [10, 20, 30, 40, 50];
  
  
  //numbers.length => returns the numbers of values in the array
  //Traditional for loop
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log("Value of index = ", element);
  }

  for (let i = 0; i < numbers.length; i++) {
    console.log("index", i, "=", numbers[i]);
  }
}

// function2();



function fuction3(){
  const numbers = [10, 20, 30, 40, 50];

  //in java for(int number : numbers)

  //in  js
  // for..of loop
  for(const number of numbers){
    console.log('numbers = ',number)
  }
}
// fuction3()

function function4(){
  const countries = ['India','USA','Japan','Italy','Rassia']
  
  for(let index = 0; index < countries.length; index++){
    console.log('contries = ',countries[index])
  }

  //for..of loop
  // -> gives value
  for (const contry of countries) {
    console.log('contry -> ',contry)
  }
}

// function4()

// for..in loop 
// -> gives index (position)

function fuction5(){
  const numbers = [10, 20, 30, 40, 50]
  for(const index in numbers){
    console.log('index = ',index)
  }

  for(const index in numbers){
    console.log('Value at index = ',numbers[index])
  }
}

fuction5()