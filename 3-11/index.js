// Implement the function unique_in_order which takes
//  as argument a sequence and returns a list of
//  items without any elements with the same value
//   next to each other and preserving the original order of elements.

// my solution:

function uniqueInOrder(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}

// best solution:

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
