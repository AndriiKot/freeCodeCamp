const arr = ['value 1', 'value 2', 'value 3']
const arr1 = arr.slice();

console.log(arr.splice(1)); // ['value 2', 'value 3']
console.log(arr);            // ['value 1']

console.log(arr1.splice(1,1,"new value 2"));   // []
console.log(arr1);                             // ['value 1', 'new value 2', 'value 3']

arr1.splice(2,0, "ADD new value X");
console.log(arr1);                            // ['value 1', 'new value 2',"ADD new value X", 'value 3']

