const Bird = function () {};

Bird.prototype.numLegs = 2;

Bird.prototype.eat = function () {
  console.log("nom nom nom");
};

Bird.prototype.describe = function () {
  console.log("My name is " + this.name);
};

const canary = new Bird();

console.log(canary.numLegs);
canary.eat();
canary.describe();

// OR
Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

const canary2 = new Bird();

console.log("\n\nCanary 2");
console.log(canary2.numLegs);
canary2.eat();
canary2.describe();

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

console.log("\n\nMy Dog!");
const chappa = new Dog("Chappa");
console.log(chappa.numLegs);
chappa.eat();
chappa.describe();
