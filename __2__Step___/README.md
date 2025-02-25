### Step 2

Now the teacher needs your help 
converting the student score to a letter grade.

Complete the getGrade function that 
takes a number score as a parameter. 
Your function should return a string 
representing a letter grade based on the score.

Here are the scores and their 
corresponding letter grades:

Score Range Grade
100 "A++"
90 - 99 "A"
80 - 89 "B"
70 - 79 "C"
60 - 69 "D"
0 - 59  "F"

### Solution

```js
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
```

###### Tips

Remember that you learned about conditional statements(if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===).


