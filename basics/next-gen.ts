const add = (n1: number, n2: number = 1) => n1 + n2;

const printOutput = (output: number | string) => {
  console.log(output);
};

printOutput(add(3));

const hobbies: string[] = ['music', 'cooking'];

const activeHobbies: string[] = ['dancing'];
console.log(...hobbies);

activeHobbies.push(...hobbies);

const person: { name: string; age: number } = {
  name: 'Wassem',
  age: 21,
};

const newPerson = { ...person };
