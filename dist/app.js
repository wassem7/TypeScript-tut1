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
class AccoutingDepartment extends Department {
    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found !');
    }
    constructor(id, reports) {
        super(id, 'Accouting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT DEPARTMENT');
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === 'Wassem') {
            return;
        }
    }
}
const accounting = new AccoutingDepartment('ACC', []);
console.log(accounting.recentReport);
accounting.addEmployee('Wassem');
accounting.addEmployee('Kwame');
accounting.printEmployeeInformation();
