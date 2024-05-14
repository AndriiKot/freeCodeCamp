let repeatStr = "row row row your boat";

let repeatRegex = /(\w+) \1 \1/;

repeatRegex.test(repeatStr);  // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]


// Task

// Используйте группы захвата reRegex для сопоставления строки, 
// состоящей только из одного и того же числа, 
// повторяющегося ровно три раза и разделенного одинарными пробелами.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);


