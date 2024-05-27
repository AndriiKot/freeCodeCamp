﻿const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return ' '.repeat(rowCount - rowNumber)
         + character.repeat(2 * rowNumber - 1) + 
	 ' '.repeat(rowCount - rowNumber);
}
// comments
/*for (let i = 1; i <= count; i += 1) {
  rows.push(padRow(i, count));
}*/

let done = 0;

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
  if(done === count) {
    continueLoop = false;
  }
};


let result = '';

for (const row of rows) {
  result = result + "\n" + row;
};

console.log(result);



