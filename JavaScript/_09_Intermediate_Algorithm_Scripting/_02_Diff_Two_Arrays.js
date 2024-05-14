function diffArray(arr1, arr2) {
  const newArr = [];
  let maxIteration = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxIteration; i++) {
    const element_arr2 = arr1.includes(arr2[i]) ? undefined : arr2[i];
    element_arr2 ? newArr.push(element_arr2) : null;
    const element_arr1 = arr2.includes(arr1[i]) ? undefined : arr1[i];
    element_arr1 ? newArr.push(element_arr1) : null;
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Diff Two Arrays
// Compare two arrays and return a new array
// with any items only found in one of the two
// given arrays, but not both. In other words,
// return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.
