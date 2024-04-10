let exampleStr = "Let's have fun with regular expressions!";

// dot matches any character except a new line
// !!!
let unRegex = /.un/;
// !!!

let result = unRegex.test(exampleStr);

console.log(result); // true
console.log(exampleStr);

// . означает любой символ включая пробелы
// . не совпадает с символом \n !!!

let newExampleStr = "Let's have f \nun with regular expressions!";
console.log("\n \\n:");
console.log(unRegex.test(newExampleStr)); // false
console.log(newExampleStr);
