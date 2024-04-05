let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; 
let result = difficultSpelling.match(myRegex);

console.log(result) // [ 'ss', 'ss' ]