function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log(num);
}

function addandhandle(
  n1: number,
  n2: number,
  cb: (a: number) => void
) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(2, 3));
addandhandle(2, 3, (result) => {
  console.log(result);
});
