//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(string) {
    console.log(string.length)
    let hasZero = 0;
    for (const str of string) {
        // console.log(str);
        if (str === '0') {
            hasZero = hasZero + 1;
        }
    }
    return hasZero;
}

const str = '01010101010101011100101011';

const res = count_zero(str);
console.log(res);
