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

// task 2:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// my solution:

var countSheep = function (num) {
  //your code here
  let phrase = "";
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      phrase += i + " sheep...";
    }
  }
  return phrase;
};

// recommended solution:

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
