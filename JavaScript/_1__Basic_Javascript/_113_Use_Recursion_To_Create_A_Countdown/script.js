// Only change code below this line
function countdown(n) {
  if (n < 1) return []; // base case: n is less than 1, so return an empty array to run [];
  const arr = countdown(n - 1);
  arr.unshift(n);
  return arr;
}
// Only change code above this line

console.log(countdown(10));
