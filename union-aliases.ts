type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: any;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  //   if (resultConversion == 'as-number') {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedNumbers = combine(3, 4, 'as-number');
console.log(combinedNumbers);

const combinedNumbersLetters = combine('3', '4', 'as-number');
console.log(combinedNumbersLetters);

const combinedLetters = combine(
  'Wassem ',
  'Darkwa',
  'as-string'
);
console.log(combinedLetters);

type User = { name: string; age: number };

const user1: User = { name: 'was', age: 21 };
