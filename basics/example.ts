class AccountingDepartment {
  constructor(private name: string, private reports: string[]) {}

  static instance: AccountingDepartment;

  static getInstance(name: string, reports: string[]) {
    if (AccountingDepartment.instance) {
      return this.instance;
    } else {
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
