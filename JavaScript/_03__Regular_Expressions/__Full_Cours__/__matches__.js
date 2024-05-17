
console.log("Hello, World!".match(/Hello/)); // [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;

console.log(ourStr.match(ourRegex)); 
// [
//     'expressions',
//     index: 8,
//     input: 'Regular expressions',
//     groups: undefined
//   ]

// match() and test() methods
// !!!!
console.log('string'.match(/regex/)); // null  !!!
// !!!!
/regex/.test('string'); // false


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);

console.log(result); // [ 'coding', index: 18, input: 'Extract the word \'coding\' from this string.', groups: undefined ]
