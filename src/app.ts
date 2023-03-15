const names: Array<string> = [];

const promise: Promise<string> = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve('Working now !');
    }, 2000);
  }
);

promise.then((data) => console.log(data));

function merge<T extends Object, U extends Object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

// console.log(
//   merge({ name: 'Wassem' }, { networth: 'unlimited' })
// );

// const a = merge({ name: 'Wassem' }, 3);
// console.log(a);

interface Lenghthy {
  length: number;
}
function CountandDescribe<T extends Lenghthy>(
  element: T
): [T, string] {
  let descriptionText = 'Got not text';

  if (element.length === 1) {
    descriptionText = 'Got a text';
  } else if (element.length > 1) {
    descriptionText = 'Got some texts !';
  }

  return [element, descriptionText];
}

console.log(CountandDescribe('Wassem'));
