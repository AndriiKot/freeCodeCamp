// !!! Получать длину второго массива 
// function frankenSplice(arr1, arr2, n) {
//     const newArray = Array.from({length: arr1.length + arr2.length}, () => 0);
//     newArray.forEach((element,i) => {   
//         for(let j = 0; j < n; j++) {
//             newArray[i + j] = arr2[i + j];   
//             console.log(newArray)   
//         }
//         newArray[i + n] = arr1[i];
//         console.log(newArray)
//         console.log('step: ' + (i + 1));
//     });
//     // return newArray
//   }
  
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));