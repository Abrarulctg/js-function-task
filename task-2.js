//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(number) {
    if (number % 2 === 1) {
        console.log('the number is odd');
        return number * 2;
    }
    else {
        console.log('the number is even');
        return number / 2;
    }
}

const result = oddEven(101);

console.log(result);