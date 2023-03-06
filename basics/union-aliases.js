"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultConversion == 'as-number') {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
const combinedNumbers = combine(3, 4, 'as-number');
console.log(combinedNumbers);
const combinedNumbersLetters = combine('3', '4', 'as-number');
console.log(combinedNumbersLetters);
const combinedLetters = combine('Wassem ', 'Darkwa', 'as-string');
console.log(combinedLetters);
const user1 = { name: 'was', age: 21 };
