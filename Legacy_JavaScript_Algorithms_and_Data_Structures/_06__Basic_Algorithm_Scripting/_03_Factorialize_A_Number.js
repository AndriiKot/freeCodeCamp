function factorialize(num) {
    let result = 1;
    while(num) {
        result *= num;
        num--;
    }
  return result;
}

console.log(factorialize(5));
