type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Wassem',
  startDate: new Date(),
  priviledges: ['create server'],
};

type Combinable = number | string;
type UnknownEmployee = Employee | Admin;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

function printEmployee(emp: UnknownEmployee) {
  console.log('Name ' + emp.name);
  if ('priviledges' in emp) {
    console.log('Privildges : ' + emp.priviledges);
  }
  if ('startDate' in emp) {
    console.log('Start Date : ' + emp.startDate);
  }
}

printEmployee(e1);

class Car {
  drive() {
    console.log('Driving ...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck ....');
  }

  loadCargo(amount: number) {
    console.log('Loading Cargo ....' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function printVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(200);
  }
}

printVehicle(v1);
printVehicle(v2);
