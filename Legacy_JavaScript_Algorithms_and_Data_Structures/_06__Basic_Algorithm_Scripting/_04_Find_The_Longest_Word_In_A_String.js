function findLongestWordLength(str) {
  const arr = str.split(" ").map((str) => str.length);
  const maxString = arr.reduce((a, b) => Math.max(a, b));
  console.log("MAX LENGTH: " + maxString);
  return maxString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
