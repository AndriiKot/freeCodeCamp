const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

const arr = [111, 222, 333, 444];

numbers.splice(startIndex, amountToDelete, ...arr);
console.log(numbers);

// [10, 11, 12, 111, 222, 333, 444, 15];

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
