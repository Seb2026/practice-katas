// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// My Attempt(incorrect): 
// function adjacentElementsProduct(array) {
//     // max product
//     let sum = 0;
//     const newArray = array.sort((a,b) => {
//       return b - a;
//     });
//     return sum = array[0] * array[1];
//     }

// Correct way :

function adjacentElementsProduct(array) {
    // max product
    let tester = Number.MIN_SAFE_INTEGER;
    let firstOne = 0;
    let secondOne = 0;
    for (let i = 0; i < array.length; i++){
      firstOne = array[i];
      secondOne = array[i + 1];
      if (firstOne * secondOne > tester){
        tester = firstOne * secondOne;
      };
    };
  
     return tester;
    }