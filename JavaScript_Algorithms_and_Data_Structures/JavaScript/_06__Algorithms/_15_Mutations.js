function mutation(arr) {
  let answer = true;
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();

  for (let i = 0; i < string2.length; i++) {
    if (!string1.includes(string2[i])) {
      answer = false;
      break;
    }
  }
  return answer;
}

console.log(mutation(["hello", "heyyyy"]));
console.log(mutation(["hello", "hel"]));
