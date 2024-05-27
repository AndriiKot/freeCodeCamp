const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
console.log(bicycle.gear)
bicycle.setGear(3);
console.log(bicycle.gear);

// es5
// const bicycle = {
//   setGear: function (newGear) {
//     this.gear = newGear;
//   },
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);
