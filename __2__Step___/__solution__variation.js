function getGrade(score) {
  const grades = {
    "A++": score > 99,
    "A": score > 89,
    "B": score > 79,
    "C": score > 69,
    "D": score > 59,
    "F": score <= 59
  };

  for (const [grade, condition] of Object.entries(grades)) {
    if (condition) {
      return grade; 
    }
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
