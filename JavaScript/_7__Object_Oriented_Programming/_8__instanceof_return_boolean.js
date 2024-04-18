function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(4);
console.log(myHouse instanceof House);