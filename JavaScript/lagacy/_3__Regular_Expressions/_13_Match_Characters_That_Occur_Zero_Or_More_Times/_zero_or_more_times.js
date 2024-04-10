const chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
let chewieRegex = /Aa*/g; 

let result = chewieQuote.match(chewieRegex);

console.log(result); // ['Aaaaaaaaaaaaaaaaa']