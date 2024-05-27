function confirmEnding(str, target) {
  const result = str.substr(-target.length) === target;
  console.log(result);
  return result;
}

confirmEnding("Bastian", "n");
