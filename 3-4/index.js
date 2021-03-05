// Write a function that will return the
// count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.

// my solution:

function duplicateCount(text) {
  //...
  let result = 0,
    soltingObject = {};
  text
    .toLowerCase()
    .split("")
    .map((str) => {
      if (!soltingObject.hasOwnProperty(str)) {
        soltingObject[str] = 0;
      } else {
        if (soltingObject[str] === 0) {
          result += 1;
        }
        soltingObject[str] = soltingObject[str] + 1;
      }
    });
  return result;
}
