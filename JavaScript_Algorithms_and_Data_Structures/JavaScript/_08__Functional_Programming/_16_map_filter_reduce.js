const squareList1 = (arr) => {
  const newArray = arr
    .filter((num) => num > 0 && Number.isInteger(num))
    .map((num) => num ** 2);
  return newArray;
};

const squareList2 = (arr) => {
  const newArray = arr.reduce((accumulator, currentVal) => {
    if (currentVal > 0 && Number.isInteger(currentVal)) {
      accumulator.push(currentVal ** 2);
    }
    return accumulator;
  }, []);
  return newArray;
};

let squaredIntegers = squareList1([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

squaredIntegers = squareList2([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
