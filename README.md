# Gradebook App
In this mini project, you will get to 
review JavaScript fundamentals like functions, 
variables, conditionals and more by building a gradebook app.

This will give you an opportunity to solve 
small problems and get a better understanding of the basics.

- [Step 1](#step-1)
    - [Step 1 Solution](#step-1-solution)
- Step 2
    - Step 2 Solution
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
###### Tips
### Step 3 Solution

### Step 4
###### Tips
### Step 4 Solution






