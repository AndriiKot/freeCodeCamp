function Dog(name) {
  this.name = name;
}

const beagle = new Dog("Snoopy");

console.log(beagle.numLegs); // undefined

Dog.prototype.numLegs = 4;

console.log(beagle.numLegs); // 4
