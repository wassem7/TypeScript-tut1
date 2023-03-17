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

interface lenghty {
  length: number;
}
function countandDescribe<T extends lenghty>(
  element: T
): [T, string] {
  let description = 'Got no texts !';

  if (element.length === 1) {
    description = 'Got one text !';
  } else if (element.length > 1) {
    description = 'Got some text !';
  }

  return [element, description];
}

console.log(countandDescribe('Wassem'));

function extractandconvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractandconvert({ age: 21 }, 'age'));
