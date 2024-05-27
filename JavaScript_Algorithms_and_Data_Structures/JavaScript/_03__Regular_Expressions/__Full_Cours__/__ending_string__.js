let caboose = "The last car on a train is the caboose";
let cabooseStart = "caboose The last car on traion is the ...";

let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);
let resultStart = lastRegex.test(cabooseStart);


console.log(result);		// true
console.log(resultStart);	// false