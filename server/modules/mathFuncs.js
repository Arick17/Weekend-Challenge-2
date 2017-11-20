// function addition(inputOne, inputTwo){
//     return inputOne + inputTwo;
// }
// function subtraction(inputOne, inputTwo){
//     return inputOne - inputTwo;
// }
// function multiplication(inputOne, inputTwo){
//     return inputOne * inputTwo;
// }
// function division(inputOne, inputTwo){
//     return inputOne / inputTwo;
// }

function operator(object) {
    if (object.operator == '+') {
        return (Number(object, inputOne) + Number(object, inputTwo))
    }
    else if (object.operator == '-') {
        return (Number(object, inputOne) - Number(object, inputTwo))
    }
    else if (object.operator == '*') {
        return (Number(object, inputOne) * Number(object, inputTwo))
    }
    else if (object.operator == '/') {
        return (Number(object, inputOne) / Number(object, inputTwo))
    }
}

module.exports = operator;
