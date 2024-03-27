function sum(arr, n) {
  // Only change code below this line
  if (n < 1) return 0;
  return arr[n - 1] + sum(arr, n - 1);
  // Only change code above this line
}

console.log(multiply([1, 2, 3, 4, 5], 2));
console.log(multiply([1, 2, 3, 4, 5], 3));
console.log(multiply([1, 2, 3, 4, 5], 4));
console.log(multiply([1, 2, 3, 4, 5], 5));
