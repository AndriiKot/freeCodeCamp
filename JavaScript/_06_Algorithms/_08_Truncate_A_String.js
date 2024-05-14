function truncateString(str, num) {
  if (str.length <= num) {
    console.log(str);
    return str;
  }
  const newStr = str.substr(0, num) + "...";
  console.log(newStr);
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 298);
