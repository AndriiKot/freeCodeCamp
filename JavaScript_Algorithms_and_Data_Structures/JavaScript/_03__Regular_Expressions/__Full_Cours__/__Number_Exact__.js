// Например,
// чтобы сопоставить только слово hah с временем букв a 3,
// ваше регулярное выражение будет /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";

let multipleHA = /ha{3}h/;

multipleHA.test(A4);    // false
multipleHA.test(A3);    // true   
multipleHA.test(A100);  // false

