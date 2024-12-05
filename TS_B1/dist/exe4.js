"use strict";
let a = 6789;
let b = "135";
function plusTwoNumber(a, b) {
    return Number(a) + Number(b);
}
let checkSum = plusTwoNumber(a, b);
console.log(`Sum = ${checkSum}`);
function subTwoNumber(a, b) {
    return Number(a) - Number(b);
}
let checkSub = subTwoNumber(a, b);
console.log(`Sub = ${checkSub}`);
function mulTwoNumber(a, b) {
    return Number(a) * Number(b);
}
let checkMul = mulTwoNumber(a, b);
console.log(`Mul = ${checkMul}`);
function divTwoNumber(a, b) {
    return Number(a) % Number(b);
}
let checkDiv = divTwoNumber(a, b);
console.log(`Sum = ${checkDiv}`);
