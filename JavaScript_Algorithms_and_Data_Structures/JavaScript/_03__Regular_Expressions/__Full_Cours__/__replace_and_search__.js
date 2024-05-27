let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");


"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // "Camp Code"



let str = "one two three";

let fixRegex = /^(\w+) (\w+) (\w+)$/; 
let replaceText = "$3 $2 $1"; 

let result = str.replace(fixRegex, replaceText); // "three two one"
