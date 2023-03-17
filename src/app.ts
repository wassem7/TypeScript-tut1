// function Logger(target: Function) {
//   console.log('Logging ....');
//   console.log(target);
// }

function Logger(logstring: string) {
  return function (target: Function) {
    console.log(logstring);
    console.log(target);
  };
}
@Logger('LOGGING STRING !!')
class Person {
  name: string = 'Wassem';

  constructor() {
    console.log('Creating person object ...');
  }
}

// const person1 = new Person();
// console.log(person1);
