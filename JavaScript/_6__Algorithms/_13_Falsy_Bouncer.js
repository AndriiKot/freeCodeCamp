function bouncer(arr) {
  const newArray = arr.reduce((accumulator, currentValue) => {
    if (currentValue) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9]));
