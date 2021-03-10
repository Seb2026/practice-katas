// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// my solution:
function dashatize(num) {
  //get 'em
  num = Math.abs(num) + "";
  num = num.split("").map((char, i, chars) => {
    if (Number(char) != char) return char;
    return Number(char) % 2 !== 0
      ? Number(chars[i - 1]) % 2 === 0
        ? "-" + char + "-"
        : char + "-"
      : char;
  });
  num = num.join("");
  num = num[num.length - 1] === "-" ? num.slice(0, num.length - 1) : num;
  return num;
}

// best practice:

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "");
}
