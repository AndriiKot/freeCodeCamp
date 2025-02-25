function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  let res;
  if (score > 59) {
    res = "D";
    if (score > 69) {
      res = "C";
      if (score > 79) {
        res = "B";
        if (score > 89) {
          res = "A";
          if (score > 99) {
            res = "A++";
          }
        }
      }
    }
  } else {
    res = "F";
  }
  return res;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
