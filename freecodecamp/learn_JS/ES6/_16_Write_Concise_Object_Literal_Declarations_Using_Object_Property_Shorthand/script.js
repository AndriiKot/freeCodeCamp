const createPersonOLD = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender,
  };
  // Only change code above this line
};

const createPersonNEW = (name, age, gender) => ({
  name,
  age,
  gender,
});

console.log(createPersonOLD("Zodiac Hasbro", 56, "male"));
console.log(createPersonNEW("Erik Graf", 89, "male"));
