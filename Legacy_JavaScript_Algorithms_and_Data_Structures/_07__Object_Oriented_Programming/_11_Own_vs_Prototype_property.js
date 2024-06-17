function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (const property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
    continue;
  }
  prototypeProps.push(property);
}

// OR
// for(const property in Dog.prototype) {
//     if(beagle.hasOwnProperty(property)) {
//         ownProps.push(property);
//     } else {
//         prototypeProps.push(property);
//     }
// }

console.log(ownProps);
console.log(prototypeProps);




