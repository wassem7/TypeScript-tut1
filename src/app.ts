function Logger(target: Function) {
  console.log('Logging ....');
  console.log(target);
}
@Logger
class Person {
  name: string = 'Wassem';

  constructor() {
    console.log('Creating person object ...');
  }
}

// const person1 = new Person();
// console.log(person1);
