const chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';

// !!!
let chewieRegex = /Aa*/g; 
// !!!

let result = chewieQuote.match(chewieRegex);
console.log(result); // ['Aaaaaaaaaaaaaaaaa']


console.log('a'.match(/aa*/g)); // ["a"]
console.log('aa'.match(/aa*/g)); // ["aa"]
console.log('aaa'.match(/aa*/g)); // ["aaa"]
console.log('aaaa'.match(/aa*/g)); // ["aaaa"]
console.log('abab'.match(/aa*/g)); // ["a", "a"]


console.log("+".repeat(44));

console.log('a'.match(/aa+/g)); // null
console.log('aa'.match(/aa+/g)); // ["aa"]
console.log('aaa'.match(/aa+/g)); // ["aaa"]
console.log('aaaa'.match(/aa+/g)); // ["aaaa"]
console.log('abab'.match(/aa+/g)); // null



