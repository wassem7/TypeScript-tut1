class Department {
  name: string;

  private employees: string[] = [];

  constructor(private id: string, name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log('Department : ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccoutingDepartment extends Department {
  private lastReport: string;

  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found !');
  }
  constructor(id: string, private reports: string[]) {
    super(id, 'Accouting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT DEPARTMENT');
    this.admins = admins;
  }

  addEmployee(name: string) {
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
// const accountingCopy = {
//   name: 'DUMMY',
//   describe: accounting.describe,
// };
// accountingCopy.describe();
