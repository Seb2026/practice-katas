// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.


function findMissingLetter(array){
    for (let i = 1; i < array.length; i++){
      let previousLetr = array[i - 1].charCodeAt();
      let currentLetr = array[i].charCodeAt();
      if(currentLetr - previousLetr !== 1){
        return String.fromCharCode(previousLetr + 1); // originally had currentLetr in parenthesis
      }
    }
  }