function sentensify(str) {
  return str.split(/[^a-zA-Z0-9]/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));

