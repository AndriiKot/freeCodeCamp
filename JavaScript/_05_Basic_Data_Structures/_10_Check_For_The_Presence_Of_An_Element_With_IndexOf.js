let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

//  !!!
console.log(fruits.indexOf("dates")); // -1 Элемент не существует !!!

console.log(fruits.indexOf("oranges")); // 2 позиция елемента
console.log(fruits.indexOf("pears")); // 1 позиция елемента

function quickCheck(arr, elem) {
    return arr.indexOf(elem) === -1 ? false : true
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
