function filteredArray(arr, elem) {
  let newArr = [];
  const len = arr.length
  for (let i = 0; i < len; i++) {
    console.log(arr[i]);
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
