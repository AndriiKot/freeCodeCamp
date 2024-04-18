function Dog() {
  this.name = "Chappa";
  this.numLegs = 4;
  this.color = "black";
}

let dog = new dog();
console.log(dog.name, dog.numLegs, dog.color);

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let bird = new Bird();
console.log(bird.name, bird.color, bird.numLegs);