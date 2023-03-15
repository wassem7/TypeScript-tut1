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

// printVehicle(v1);
// printVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function printSpeed(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;

    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed ' + speed);
}

const b1: Bird = { type: 'bird', flyingSpeed: 200 };
printSpeed(b1);

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'wassemdarkwa@gmail.com',
};

function addnew(a: number, b: number): number;
function addnew(a: string, b: string): string;
function addnew(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const fetchedUserData = {
  id: 1,
  name: 'Wassem Darkwa',
  // job: {
  //   title: 'Founder',
  // },
};

const userInput = '';

const u = userInput ?? 'DEFAULT';
console.log(u);

// console.log(fetchedUserData?.job.title);
