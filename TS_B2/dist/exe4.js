"use strict";
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(getRandomNumber(1, 500));
}
console.log(`Array Origin: ${randomNumbers}`);
function sortArray(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(`Array Sorted: ${arr}`);
}
sortArray(randomNumbers);
