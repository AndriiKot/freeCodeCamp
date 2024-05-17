// Сопоставление символов без пробелов
// Вы узнали о поиске пробелов с помощью \s
// строчной буквы s. Вы также можете искать все, кроме пробелов.

// Ищите непробельные символы, используя \S, 
// который является заглавной буквой s. 
// Этот шаблон не будет соответствовать пробелам, возврату каретки, табуляции, 
// переводу страницы и символам новой строки. 
// Вы можете думать, что это похоже на класс символов [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex);


console.log(whiteSpace.match(nonSpaceRegex)); // ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', '.', 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'e', 'v', 'e', 'r', 'y', 'w', 'h', 'o', 'r', 'e']    
console.log(whiteSpace.match(/\S/g).length); // 34


let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);


console.log(result); // ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's']
