"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.employees = [];
        this.name = name;
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
    static getInstance() {
        if (AccoutingDepartment.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccoutingDepartment('ACC', [
                'Report 1',
            ]);
            return this.instance;
        }
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    describe() {
        console.log(this.name);
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
    describe() {
        console.log();
    }
}
const employee1 = Department.createEmployee('Kwame');
console.log(employee1, Department.fiscalYear);
const accouting = AccoutingDepartment.getInstance();
console.log(accouting);
const accounting1 = AccoutingDepartment.getInstance();
console.log(accounting1);
