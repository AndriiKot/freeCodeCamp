// The global variable
let fixedValue = 4;

console.log(fixedValue); // 4

function incrementer1() {
  return fixedValue + 1;
}
incrementer1();
console.log(fixedValue); // 4

function incrementer2(arg) {
  arg++;
  return arg;
}

incrementer2(fixedValue);
console.log(fixedValue); // 4
