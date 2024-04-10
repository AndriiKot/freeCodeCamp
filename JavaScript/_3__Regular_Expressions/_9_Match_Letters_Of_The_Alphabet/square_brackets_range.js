let quoteSample = "The quick brown fox jumps over the lazy dog.";

let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

console.log(result); 

// [
//     'T', 'h', 'e', 'q', 'u', 'i', 'c',
//     'k', 'b', 'r', 'o', 'w', 'n', 'f',
//     'o', 'x', 'j', 'u', 'm', 'p', 's',
//     'o', 'v', 'e', 'r', 't', 'h', 'e',
//     'l', 'a', 'z', 'y', 'd', 'o', 'g'
// ]

console.log(result.length); // 35 


