let shortHand = /\W/;
let numbers = "42%";

let sentence = "Coding!";

console.log(numbers.match(shortHand));  // [ '%', index: 2, input: '42%', groups: undefined ]
console.log(sentence.match(shortHand)); // [ '!', index: 6, input: 'Coding!', groups: undefined ]


