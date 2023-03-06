"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log(num);
}
function addandhandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValues;
combineValues = add1;
console.log(combineValues(2, 3));
addandhandle(2, 3, (result) => {
    console.log(result);
});
