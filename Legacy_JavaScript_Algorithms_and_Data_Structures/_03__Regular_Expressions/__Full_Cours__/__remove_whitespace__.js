let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)(Hello, World!)(\s*)$/; 

let replaceText = '$2';
let result = hello.replace(wsRegex, replaceText); 