"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Working now !');
    }, 2000);
});
promise.then((data) => console.log(data));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const a = merge({ name: 'Wassem' }, 3);
console.log(a);
