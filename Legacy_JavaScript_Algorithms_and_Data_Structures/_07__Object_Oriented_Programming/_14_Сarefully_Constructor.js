function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

const chappa = new Dog("Chappa");
console.log(chappa.constructor === Dog); // !!! false !!!
chappa.eat();
chappa.describe();

Dog.prototype = {
  constructor: Dog,
};

const dick = new Dog("Dick");

console.log(chappa.constructor === Dog); // !!! false !!!
console.log(dick.constructor === Dog); // !!! true !!!
