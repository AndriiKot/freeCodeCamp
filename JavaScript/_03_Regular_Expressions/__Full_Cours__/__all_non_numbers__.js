let movieName = "2001: A Space Odyssey";

let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex);

console.log(result);
console.log(result.length);

/*
[
  ':', ' ', 'A', ' ', 'S',
  'p', 'a', 'c', 'e', ' ',
  'O', 'd', 'y', 's', 's',
  'e', 'y'
]
17
*/