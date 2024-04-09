const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];

  arr.forEach((element) => {
    failureItems.push(`<li class="text-warning">${element}</li>`);
  });

  return failureItems;
}

function makeList2(arr) {
  const failureItems = new Array(arr.length).fill('');

  arr.forEach((element,index) => {
    failureItems[index] =`<li class="text-warning">${element}</li>`;
  });

  return failureItems;
}

const failuresList1 = makeList(result.failure);
const failuresList2 = makeList2(result.failure);

console.log(failuresList1);
console.log(failuresList2);

// оптимизация 
