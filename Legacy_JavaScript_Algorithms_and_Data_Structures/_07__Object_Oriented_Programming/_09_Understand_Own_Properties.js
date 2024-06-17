function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

const canary = new Bird("Tweety");

const ownProps1 = [];

for (const property in canary) {
  ownProps1.push(property);
}

// OR

const ownProps2 = Object.keys(canary);

// OR
const ownProps3 = [];
for (const property in canary) {
  if (canary.hasOwnProperty(property)) ownProps3.push(property);
}

console.log(ownProps1);
console.log(ownProps2);
console.log(ownProps3);
