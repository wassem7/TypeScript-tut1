"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT DEPARTMENT');
        this.admins = admins;
    }
}
const accounting = new Department('ACC', 'Accouting');
console.log(accounting);
accounting.addEmployee('Wassem');
accounting.addEmployee('Kwame');
accounting.printEmployeeInformation();
