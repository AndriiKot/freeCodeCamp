function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice)
}


// Simple test
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3)); // ["Dog", "Tiger"]
console.log(inputAnim);                 // ["Cat", "Dog", "Tiger", "Zebra", "Ant"]
