"use strict";
let stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
let numberArr = [1, 2, 3, 4, 5];
function reverseArrayNum(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
function reverseArrayStr(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
reverseArrayNum(numberArr);
reverseArrayStr(stringArray);
