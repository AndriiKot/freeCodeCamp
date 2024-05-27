function checkPositive(arr) {
    return arr.every((num) => num > 0);
}

checkPositive([1, 2, 3, -4, 5]);
