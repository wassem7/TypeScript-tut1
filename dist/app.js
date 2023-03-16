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
function countandDescribe(element) {
    let description = 'Got no texts !';
    if (element.length === 1) {
        description = 'Got one text !';
    }
    else if (element.length > 1) {
        description = 'Got some text !';
    }
    return [element, description];
}
console.log(countandDescribe('Wassem'));
function extractandconvert(obj, key) {
    return obj[key];
}
console.log(extractandconvert({ age: 21 }, 'age'));
