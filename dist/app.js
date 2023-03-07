"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('Department : ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accouting');
accounting.addEmployee('Wassem');
accounting.addEmployee('Kwame');
accounting.printEmployeeInformation();
