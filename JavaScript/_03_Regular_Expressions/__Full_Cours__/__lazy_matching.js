
const titanic = 'titanic';
const titanicRegex = /t[a-z]*i/g;

console.log(titanic.match(titanicRegex)); // [ 'titanic' ]


const titanicRegexLazy = /t[a-z]*?i/g;
console.log(titanic.match(titanicRegexLazy)); // [ 'ti', 'tani' ]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g; 
let result = text.match(myRegex);


console.log(result); ['<h1>', '</h1>']
