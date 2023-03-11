"use strict";
let addnumbers;
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let person1;
person1 = new Person('Wassem');
person1.greet('Good Afternoon');
