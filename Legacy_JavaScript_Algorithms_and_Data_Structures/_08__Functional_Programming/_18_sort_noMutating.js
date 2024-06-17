const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return [...arr].sort((a,b) => a - b);
}

console.log(nonMutatingSort(globalArray));  // [2, 3, 5, 6, 9]
console.log(globalArray);                   // [5, 6, 3, 2, 9]


console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
