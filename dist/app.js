"use strict";
const e1 = {
    name: 'Wassem',
    startDate: new Date(),
    priviledges: ['create server'],
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployee(emp) {
    console.log('Name ' + emp.name);
    if ('priviledges' in emp) {
        console.log('Privildges : ' + emp.priviledges);
    }
    if ('startDate' in emp) {
        console.log('Start Date : ' + emp.startDate);
    }
}
printEmployee(e1);
class Car {
    drive() {
        console.log('Driving ...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck ....');
    }
    loadCargo(amount) {
        console.log('Loading Cargo ....' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function printVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(200);
    }
}
function printSpeed(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed ' + speed);
}
const b1 = { type: 'bird', flyingSpeed: 200 };
printSpeed(b1);
