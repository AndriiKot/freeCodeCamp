function hasPassingGrade(score) {
  return score > 59;
}

function getAverage(scores) {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function getGrade(score) {
  const grades = {
    "A++": score > 99,
    A: score > 89,
    B: score > 79,
    C: score > 69,
    D: score > 59,
    F: score <= 59,
  };

  for (const [grade, condition] of Object.entries(grades)) {
    if (condition) {
      return grade;
    }
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
