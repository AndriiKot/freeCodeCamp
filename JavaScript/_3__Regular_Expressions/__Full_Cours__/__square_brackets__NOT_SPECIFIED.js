let quoteSample = "3 blind mice.";

// !!!
let myRegex = /[^aeiou0-9]/ig; 
// !!!

let result = quoteSample.match(myRegex); 

console.log(result);

// [
//     ' ', 'b', 'l',
//     'n', 'd', ' ',
//     'm', 'c', '.'
// ]

