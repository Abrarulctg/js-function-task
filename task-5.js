//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num) {
    // console.log(num);

    if (num % 2 === 0) {
        return ('Given number is even');
    }
    else {
        return ('Given number is odd')
    }
}

const number = odd_even(31);

console.log(number);