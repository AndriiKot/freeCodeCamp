// Например, чтобы соответствовать только букве a, 
// встречающейся между 3 и 5 раз в строке ah, вашим 
// регулярным выражением будет /a{3,5}h/.


let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;

console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // alias for /Oh{3,6} no/
let result = ohRegex.test(ohStr);

console.log(result); // true