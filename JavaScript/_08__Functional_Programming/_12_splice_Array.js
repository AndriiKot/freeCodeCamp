function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(nonMutatingSplice(inputCities)); // ["Chicago", "Delhi", "Islamabad"]
console.log(inputCities);                   //  ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]
