const arrName = ['Andrii','Roma','Dima'];
const stringName = arrName.slice();

console.log(arrName);             // ['Andrii','Roma','Dima']
console.log(stringName.join());   // Andrii,Roma,Dima
console.log(stringName.join(''))  // AndriiRomaDima
console.log(stringName.join(' ')) // Andrii Roma Dima


