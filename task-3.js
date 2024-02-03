// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    console.log(numbers.length);
    let sum = 0;
    for (const number of numbers) {
        // console.log(number)
        sum = sum + number;
    }
    return (sum / numbers.length);

}

const numbers = [3, 4, 5, 6, 7, 10];

const avg = make_avg(numbers);
console.log(avg);