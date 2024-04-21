function Bird() {}
function Dog() {}

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);
// OR
console.log(duck instanceof Bird);
console.log(beagle instanceof Dog);

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  }
  return false;
}
