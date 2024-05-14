// Более практичное использование опережающего 
// просмотра — проверка двух или более шаблонов в одной строке. 

// Task 1
// Вот (наивно) простая программа проверки паролей, 
// которая ищет от 3 до 6 символов и хотя бы одно число:     
// !!!
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
// !!!

// Task 2
// Используйте предварительный просмотр 
// для pwRegexсопоставления паролей 
// длиной более 5 символов и состоящих из
// двух последовательных цифр.
// !!!
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/g; 
let result = pwRegex.test(sampleWord);
// !!!

let pwRegex = /(?=\w{3,6})(?=\D*\d)/; 

let sampleWord = "astronaut";
let sampleWord_2 = 'abc123';

let result_1 = pwRegex.test(sampleWord);
let result_2 = pwRegex.test(sampleWord_2);

console.log(result_1); // false
console.log(result_2); // true




let quit = "qu";
let quRegex= /q(?=u)/;
console.log(quit.match(quRegex));  // [ 'q' ]




let noquit = "qt";
let noquit2 = "qx";
let qRegex = /q(?!u)/;
console.log(noquit.match(qRegex));   // [ 'q' ]
console.log(noquit2.match(qRegex));  // [ 'q' ]
