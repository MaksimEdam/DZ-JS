function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  //return(fruits.includes(fruit)) ; 
console.log(fruits.includes(fruit));
}
checkFruit("apple"); //-true

function getCommonElements(array1, array2) {
    let element = [];
    for (let i of array1) {
        if (array2.includes(i)) {
            element.push(i);
        }
    }
   // return element;
   console.log(element); 
}
getCommonElements([1, 2, 3], [2, 4]);

/* function calculateTotalPrice(order) {
  let total = 0;
    for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
    //return total;
    console.log(total);
}
calculateTotalPrice([12, 85, 37, 4]); */

function calculateTotalPrice(order) {
  let total = 0; //-обязательно нуно
  for (let number of order) {
    total += number;
  }
    //return total;
    console.log(total);
}
calculateTotalPrice([12, 85, 37, 4]);

/* function filterArray(numbers, value) {
    const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  //return filteredNumbers;
    console.log(filteredNumbers);
}
filterArray([1, 2, 3, 4, 5], 3); */


function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (let number of numbers) {
         if (number > value) {
      filteredNumbers.push(number);
    }
  }
  //return filteredNumbers;
    console.log(filteredNumbers);
}
filterArray([1, 2, 3, 4, 5], 3);

function findNumber(start, end, divisor) {
    for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      divisor = i;
          }
  }
  //return divisor;
    console.log(divisor);
}
findNumber(2, 6, 5);
findNumber(8, 17, 3);

function includes(array, value) {
for(let number of array) {
  if (number === value) {
    return true;
  } 
}
    return false;
}
includes([1, 2, 3, 4, 5], 3); //-true.