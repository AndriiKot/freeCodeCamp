let quoteSample = "Blueberry 3.141592653s are delicious.";

let myRegex = /[2-6h-s]/gi; 
let result = quoteSample.match(myRegex); 

console.log(result);

// [
//     'l', 'r', 'r', '3', '4',
//     '5', '2', '6', '5', '3',
//     's', 'r', 'l', 'i', 'i',
//     'o', 's'
// ]