
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;    // !!! gi !!!
let result = twinkleStar.match(starRegex); 


console.log(result); // [ 'Twinkle', 'twinkle' ]



