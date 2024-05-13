function chunkArrayInGroups(arr, size) {
  const newArray = [];
  const len = arr.length;
  let i = 0;
  for (let i = 0; i < len; i += size) {
    const testArray = [];
    let step = 0;
    while (size > step && i + step < len) {
      testArray.push(arr[i + step]);
      step++;
    }
    newArray.push(testArray);
  }

  return newArray;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
