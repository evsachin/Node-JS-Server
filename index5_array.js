// array methods
// push -> append value at the end
// pop -> remove last value
function fuction1() {
  const numbers = [10, 20, 30, 40, 50];
  console.log(numbers);
  // add a value at the end o fthe array
  numbers.push(60);
  console.log(numbers);
  numbers.push(70);
  console.log(numbers);
}

// fuction1()
function function2() {
  const numbers = [10, 20, 30, 40, 50];
  console.log(numbers);

  //in java
  // numbers.remove(numbers.size()-1)

  // remove last value of the array
  const value = numbers.pop();
  console.log("popped value = ", value);
  console.log(numbers);
}
// function2()

function function3() {
  // remove china form array
  const contries = ["India", "USa", "Russia", "china", "japan"];
  console.log(contries);
 
  for (let index = 0; index < contries.length; index++) {
    const contry = contries[index];
    if (contry == "china") {
        //remove 1 value form inde position
        contries.splice(index,1)
        break;
    }
  }

  console.log(contries);
}

function3();
