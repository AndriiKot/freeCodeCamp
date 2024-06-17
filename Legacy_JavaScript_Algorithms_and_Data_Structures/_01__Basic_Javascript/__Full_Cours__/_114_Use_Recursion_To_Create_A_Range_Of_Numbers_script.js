function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) return [];
  const arr = rangeOfNumbers(startNum + 1, endNum);
  arr.unshift(startNum);
  return arr;
}

console.log(rangeOfNumbers(2, 9));
console.log(rangeOfNumbers(5, 2));
console.log(rangeOfNumbers(9, 2))