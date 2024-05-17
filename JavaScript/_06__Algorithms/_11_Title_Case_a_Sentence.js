function titleCase(str) {
  const arr = str.toLowerCase().split(" ");
  let newStr = "";
  arr.forEach((element) => {
    newStr += element[0].toUpperCase() + element.substr(1) + " ";
  });
  return newStr.trim();
}

console.log(titleCase("I'm a little tea pot"));
