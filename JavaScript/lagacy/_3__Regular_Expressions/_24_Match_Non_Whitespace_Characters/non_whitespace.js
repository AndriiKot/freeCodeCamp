let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex);


console.log(whiteSpace.match(nonSpaceRegex)); // ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', '.', 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'e', 'v', 'e', 'r', 'y', 'w', 'h', 'o', 'r', 'e']    
console.log(whiteSpace.match(/\S/g).length); // 34


let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);


console.log(result); // ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's']
