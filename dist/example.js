"use strict";
class AccountingDepartment {
    constructor(name, reports) {
        this.name = name;
        this.reports = reports;
    }
    static getInstance(name, reports) {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepartment(name, reports);
            return this.instance;
        }
    }
}
const acc1 = AccountingDepartment.getInstance('Wass', [
    'Report 1',
]);
const acc2 = AccountingDepartment.getInstance('Wass', [
    'Report 1',
]);
console.log(acc1);
