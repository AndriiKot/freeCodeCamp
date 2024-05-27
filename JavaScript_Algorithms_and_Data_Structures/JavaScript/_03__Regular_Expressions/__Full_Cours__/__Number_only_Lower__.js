// Например, чтобы сопоставить только строку hah, 
// в которой буква a встречается хотя бы 3 раз, 
// вашим регулярным выражением будет /ha{3,}h/

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";

let multipleA = /ha{3,}h/;

console.log(multipleA.test(A4));     // true
console.log(multipleA.test(A2));    // false
console.log(multipleA.test(A100)); // true


let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);

console.log(result); // true


