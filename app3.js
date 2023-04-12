const arr = ['str1','str2',11,-4,true,false,101];

console.log(arr);               // ['str1','str2',11,-4,true,false,101]
console.log(arr[arr.length-1]);  //   101
console.log(arr.at(-1));        //   101

console.log(arr.shift());        //   'str1'
console.log(arr);                //   ['str2',11,-4,true,false,101]

console.log(arr.push(55));       //   7
console.log(arr);                // ['str2',11,-4,true,false,101,55]

