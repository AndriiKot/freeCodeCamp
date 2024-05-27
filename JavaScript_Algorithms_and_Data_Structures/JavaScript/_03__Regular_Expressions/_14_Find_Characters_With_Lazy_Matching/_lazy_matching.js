let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g; 
let result = text.match(myRegex);


console.log(result); ['<h1>', '</h1>']
