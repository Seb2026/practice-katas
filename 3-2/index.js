// Write an algorithm that takes an
//  array and moves all of the zeros to the end,
//  preserving the order of the other elements.

// my solution:

var moveZeros = function (arr) {
  // TODO: Program me

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      let temp = arr.splice(i, 1);
      arr.push(temp[0]);
    }
  }
  return arr;
};

// recommended solution:

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function (num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
};
