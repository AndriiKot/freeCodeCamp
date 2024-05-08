function frankenSplice(arr1, arr2, n) {
  n = n > arr2.length ? arr2.length : n;
  const newArray = Array.from(
    { length: arr2.length + arr1.length },
    (element, i) => {
      if (i < n) {
        element = arr2[i];
      } else {
        if (i < arr1.length + n) {
          element = arr1[i - n];
        } else {
          element = arr2[i - arr1.length];
        }
      }

      return element;
    }
  );

  return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]

// Устаревшие алгоритмы JavaScript и структуры данных
// Неуспешный :frankenSplice([1, 2, 3], [4, 5], 1)должен вернуться [4, 1, 2, 3, 5].
