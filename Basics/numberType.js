function getNumberType(number) {
    if (number > 0) {
        return "The number is positive.";
    } else if (number < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

let number = -5;
console.log(getNumberType(number));