const sum = (...args) => {
  let total = 0;
  const len = args.length;
  for (let i = 0; i < len; i++) {
    total += args[i];
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));