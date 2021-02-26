//Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// my solution:

function sumMix(x) {
  const xNums = [];
  x.forEach((eachX) => {
    xNums.push(Number(eachX));
  });
  let count = 0;
  xNums.forEach((elem) => {
    count += elem;
  });

  return count;
}

// recommended solution:
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
