interface addFn {
  (a: number, b: number): number;
}

let addnumbers: addFn;

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  outputName?: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let person1: Greetable;

person1 = new Person('Wassem');

person1.greet('Good Afternoon');
