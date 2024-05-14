function repeatStringNumTimes(str, num) {
  let newStr = "";

  while (num > 0) {
    num--;
    newStr += str;
  }
  console.log(newStr);
  return newStr;
}

repeatStringNumTimes("abc", 3);
