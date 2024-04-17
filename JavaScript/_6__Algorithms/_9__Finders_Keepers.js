function findElement(arr, func) {
  let num;
  let conditionMet = false;
  arr.forEach((element) => {
    if (!conditionMet && func(element)) {
      num = element;
      conditionMet = true;
    }
  });
  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
