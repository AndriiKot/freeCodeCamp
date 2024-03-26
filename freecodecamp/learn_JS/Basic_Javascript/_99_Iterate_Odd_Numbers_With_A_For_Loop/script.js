// Setup
const myArray = [];

let i = 1;
do {
  myArray.push(i);
  i += 2;
} while (i < 10);

// Alias 1

// for (let i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }

// Alias 2

// let i = 1;
// while (i < 10) {
//   myArray.push(i);
//   i += 2;
// }

console.log(myArray); // [1, 3, 5, 7, 9]
