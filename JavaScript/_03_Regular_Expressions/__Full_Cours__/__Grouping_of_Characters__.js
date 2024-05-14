// Если вы хотите найти что-либо Penguin или Pumpkinв строке, 
// вы можете использовать 
// следующее регулярное выражение:/P(engu|umpk)in/g


let testStr = "Pumpkin";

let testRegex = /P(engu|umpk)in/;

testRegex.test(testStr); // true