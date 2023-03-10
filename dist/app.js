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
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2024;
class AccoutingDepartment extends Department {
    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found !');
    }
    set report(value) {
        if (!value) {
            throw new Error('No value');
        }
        this.lastReport = value;
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
const employee1 = Department.createEmployee('Kwame');
console.log(employee1, Department.fiscalYear);
