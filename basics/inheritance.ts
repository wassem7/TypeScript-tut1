abstract class Department {
  name: string;
  static fiscalYear: number = 2024;

  private employees: string[] = [];

  constructor(private id: string, name: string) {
    this.name = name;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class AccoutingDepartment extends Department {
  private lastReport: string;
  private static instance: AccoutingDepartment;

  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found !');
  }

  set report(value: string) {
    if (!value) {
      throw new Error('No value');
    }
    this.lastReport = value;
  }
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accouting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccoutingDepartment.instance) {
      return this.instance;
    } else {
      this.instance = new AccoutingDepartment('ACC', [
        'Report 1',
      ]);
      return this.instance;
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  describe(this: Department): void {
    console.log(this.name);
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

  describe(this: Department): void {
    console.log();
  }
}

const employee1 = Department.createEmployee('Kwame');
console.log(employee1, Department.fiscalYear);
const accouting = AccoutingDepartment.getInstance();
console.log(accouting);
const accounting1 = AccoutingDepartment.getInstance();
console.log(accounting1);

// const accounting = new AccoutingDepartment('ACC', []);
// console.log(accounting.recentReport);

// accounting.addEmployee('Wassem');
// accounting.addEmployee('Kwame');
// accounting.printEmployeeInformation();
// const accountingCopy = {
//   name: 'DUMMY',
//   describe: accounting.describe,
// };
// accountingCopy.describe();
