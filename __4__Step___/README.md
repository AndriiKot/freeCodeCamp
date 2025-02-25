### Step 4

Now that the teacher has all of the
information they need, they want to
be able to message the student with the results.

Complete the studentMsg function with
totalScores and studentScore for parameters.
The function should return a string representing a message to the student.

If the student passed the course,
the string should follow this format:

Class average: average-goes-here.
Your grade: grade-goes-here. You passed the course.
If the student failed the course,
the string should follow this format:

Class average: average-goes-here.
Your grade: grade-goes-here. You failed the course.
Replace average-goes-here with the
average of the total scores.
Replace grade-goes-here with the student's grade.

### Solution

```js
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  return `Class average: ${average}. Your grade: ${studentGrade}. ${
    passed ? "You passed the course." : "You failed the course."
  }`;
}
```

###### Tips

Use the getAverage function to get the class average.
Use the getGrade function to get the student's grade.
Use string concatenation (+) to build the message.
Be careful with the punctuation and spaces in the message.

### Full Code:

```js  

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
```