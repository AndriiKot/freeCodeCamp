let rickyAndCal = "Cal and Ricky both like racing.";
let rickyAndEndCal = "Ricky both like racing and Cal.";

let calRegex = /^Cal/; 

let result = calRegex.test(rickyAndCal);
let resultEnd = calRegex.test(rickyAndEndCal);

console.log(result);		// true
console.log(resultEnd);		// false




 

