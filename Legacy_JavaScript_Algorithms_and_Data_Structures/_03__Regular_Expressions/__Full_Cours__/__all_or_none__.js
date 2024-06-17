// Указать возможное существование элемента можно 
// с помощью вопросительного знака ?. 
// Это проверяет ноль или один из предыдущих элементов. 
// Вы можете думать об этом символе как о том, 
// что предыдущий элемент не является обязательным.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;

rainbowRegex.test(american); // true
rainbowRegex.test(british);  // true 

console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));
