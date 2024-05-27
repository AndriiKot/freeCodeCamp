Array.prototype.myMap = function (callback) {
  const newArray = Array.from({ length: this.length }, (_, i) =>
    callback(this[i], i, this)
  );
  return newArray;
};

// sample test 1
const arr = [1, 2, 3, 4, 5];
console.log(arr.myMap((el) => el * 2));

// sample test 2
const newArray = arr.myMap((el) => el);
console.log(newArray);
