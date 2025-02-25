### Step 3

The teacher is really happy with the
program you have created so far. But
now they want to have an easy way to
check if a student has a passing grade.
A passing grade is anything that is not an "F".

Complete the function hasPassingGrade
that takes a student score as a parameter.
Your function should return true if the
student has a passing grade and false if they do not.

### Solution
```js

function hasPassingGrade(score) {
  return score > 59;
}

```

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

###### Tips

Use the getGrade function to get the
student's grade. Then check if the
grade is passing or not.

#### Full Code (range 1-3 steps)

```js

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



