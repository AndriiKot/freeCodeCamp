# Gradebook App
In this mini project, you will get to 
review JavaScript fundamentals like functions, 
variables, conditionals and more by building a gradebook app.

This will give you an opportunity to solve 
small problems and get a better understanding of the basics.
  
 
#### - [Full Code](#full-code)

- [Step 1](#step-1)
    - [Step 1 Solution](#step-1-solution)
- [Step 2](#step-2)
    - [Step 2 Solution](#step-2-solution)
- [Step 3](#step-3)
    - [Step 3 Solution](#step-3-solution)
- [Step 4](#step-4)
    - [Step 4 Solution](#step-4-solution)

### Step 1

A teacher has finished grading their students' 
tests and needs your help to calculate the average score for the class.

Complete the getAverage function which takes 
in an array of test scores and returns the average score.

The average is calculated by adding 
up all the scores and dividing by the total number of scores.

average = sum of all scores / total number of scores
A couple of function calls have been 
provided for you so you can test out your code.


###### Tips

You can use a loop to iterate 
over the scores array and add up all the scores.
You can use the length property 
to get the total number of scores.

### Step 1 Solution

```js
function getAverage(scores) {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
```

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

###### Tips

Remember that you learned about conditional statements(if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===).

### Step 2 Solution

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

### Step 3 Solution

```js

function hasPassingGrade(score) {
  return score > 59;
}

```

###### Tips

Use the getGrade function to get the
student's grade. Then check if the
grade is passing or not.


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

### Step 4 Solution

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

## Full Code

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

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  return `Class average: ${average}. Your grade: ${studentGrade}. ${
    passed ? "You passed the course." : "You failed the course."
  }`;
}
```





