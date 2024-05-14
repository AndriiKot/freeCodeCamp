function reverseString(str) {
  let newStr = "";
  const len = str.length - 1;
  for (let i = len; i > -1; --i) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("Oxi"));

function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString2("Andrii"));
