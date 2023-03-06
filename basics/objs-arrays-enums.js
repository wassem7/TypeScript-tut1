"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ-ONLY"] = 1] = "READ-ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const Person = {
    name: 'Wassem',
    age: 21,
    hobbies: ['designing', 'music'],
    role: Role.ADMIN,
};
let favaouriteActivities;
if (Person.role === Role.ADMIN) {
    console.log('An Admin');
}
