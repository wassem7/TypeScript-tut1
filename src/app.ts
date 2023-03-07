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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT DEPARTMENT');
    this.admins = admins;
  }
}

const accounting = new Department('ACC', 'Accouting');
console.log(accounting);

accounting.addEmployee('Wassem');
accounting.addEmployee('Kwame');
accounting.printEmployeeInformation();
// const accountingCopy = {
//   name: 'DUMMY',
//   describe: accounting.describe,
// };
// accountingCopy.describe();
