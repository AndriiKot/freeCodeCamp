function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  const len = arr.length;
  let getIndex = len;

  for (let i = 0; i < len; i++) {
    if (arr[i] >= num) {
      getIndex = i;
      break;
    }
  }

  return getIndex;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([2, 5, 10], 15)); // 3
