

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);    // true


// Например, чтобы сопоставить только строку hah, 
// в которой буква a встречается хотя бы 3 раз, 
// вашим регулярным выражением будет /ha{3,}h/
