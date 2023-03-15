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
function CountandDescribe(element) {
    let descriptionText = 'Got not text';
    if (element.length === 1) {
        descriptionText = 'Got a text';
    }
    else if (element.length > 1) {
        descriptionText = 'Got some texts !';
    }
    return [element, descriptionText];
}
console.log(CountandDescribe('Wassem'));
