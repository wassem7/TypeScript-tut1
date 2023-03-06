let userInput: unknown;

userInput = 'Wassem';

function generateError(message: string, code: number) {
  throw {
    message,
    errorCode: code,
  };
}

generateError('An error has occured !', 500);
