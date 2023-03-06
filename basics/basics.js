"use strict";
function add(n1, n2, showResult, phrase) {
    //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect Input !');
    //   }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 3;
const number2 = 2.3;
const printResult = true;
const phraseResult = 'The Result is ';
add(number1, number2, printResult, phraseResult);
