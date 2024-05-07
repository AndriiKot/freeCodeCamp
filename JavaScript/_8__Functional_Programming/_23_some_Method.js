function checkPositive(arr) {
    return arr.some((num) => num > 0);
}

checkPositive([1, 2, 3, -4, 5]);
