Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  const newArray = [];
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

const a = [1, 2, 3, 4, 5];
const b = a.myFilter((val) => val >= 3);

console.log(b);  // [3, 4, 5]
