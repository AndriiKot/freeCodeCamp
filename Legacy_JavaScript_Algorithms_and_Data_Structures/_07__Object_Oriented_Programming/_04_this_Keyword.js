let dog = {
  name: "Chappa",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
  sayName: function () {
    return "This dog's name is " + this.name + ".";
  },
};

dog.sayLegs();

console.log(dog.sayLegs());
console.log(dog.sayName());
