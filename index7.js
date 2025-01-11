const squere = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(numbers)
  const squereArray = [];

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    // console.log('Squere of elemnt', element,' =',element ** 2 )
    squereArray.push(element * 2);
  }
  console.log(numbers);
  console.log(squereArray);
};
// squere()

function function2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const cubes = (p1) => {
    return p1 ** 3;
  };
  const cubesarr = numbers.map(cubes);
  console.log(cubesarr);
}

// function2()

// optimized of previous
function function3() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const squere = (p1) => p1 ** 2;

  const squeres = numbers.map(squere);
  console.log(squeres);
}

// function3()

//most optimized version

function fuction4() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const squeres = numbers.map((number) => number ** 2);
  console.log(squeres);
}

// fuction4()

function function5(){
    //in f
    const temprature = [45,48,47,4,43,53,49,47]
    //convert to C

    const tempC = temprature.map(temp => 5 * (temp-32)/9)
    console.log(tempC)
    
}
// function5();

//find even numbers array
const findEvenNumbers = () =>{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNoArr = []
    for (const number of numbers) {
        if(number % 2 == 0){
            evenNoArr.push(number)
        }
    }  
    console.log(evenNoArr)  
}

// findEvenNumbers()

//find even umbers array with filter

const findEvenWithFilter = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const even = numbers.filter(number=>{
        //     if(number % 2 == 0){
    //         return number
    //     }
    // })
    
    const even = numbers.filter(n => n % 2 == 0 )
    const odd = numbers.filter(n => n % 2 != 0 )
    console.log('even = ',even)
    console.log('odd = ',odd)
}
// findEvenWithFilter()

//for each loop

const foreachloop = () =>{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.forEach(n => {
        console.log(n)
    })
    
    
}
// foreachloop()

//squere of odd numbers

const squereOfOddnumbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const squere = 
        numbers
            .filter(n => n % 2 != 0)
            .map(n => n ** 2)
    console.log(squere)
}

squereOfOddnumbers()