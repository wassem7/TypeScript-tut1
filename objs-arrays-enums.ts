// const Person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Wassem',
//   age: 21,
//   hobbies: ['designing', 'music'],
//   role: [7, 'CEO'],
// };

enum Role {
  'ADMIN',
  'READ-ONLY',
  'AUTHOR',
}
const Person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Wassem',
  age: 21,
  hobbies: ['designing', 'music'],
  role: Role.ADMIN,
};

let favaouriteActivities: any[];

if (Person.role === Role.ADMIN) {
  console.log('An Admin');
}
