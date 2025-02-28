function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  return `Class average: ${average}. Your grade: ${studentGrade}. ${
    passed ? "You passed the course." : "You failed the course."
  }`;
}

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

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
