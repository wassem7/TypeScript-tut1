"use strict";
let userInput;
userInput = 'Wassem';
function generateError(message, code) {
    throw {
        message,
        errorCode: code,
    };
}
generateError('An error has occured !', 500);
