// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments
// needs to be reversed, for example:

// my solution:
function dataReverse(data) {
  // Your code here

  if (data.length === 0) return [];
  const arrayBytes = [];
  const tam = data.length / 8;
  for (var i = 0; i < tam; i++) {
    arrayBytes.push(data.splice(0, 8));
  }
  return arrayBytes
    .reverse()
    .join()
    .split(",")
    .map((v) => v * 1);
}
