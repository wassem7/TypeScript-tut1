"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Working now !');
    }, 2000);
});
promise.then((data) => console.log(data));
