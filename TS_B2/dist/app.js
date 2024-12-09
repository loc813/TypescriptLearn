"use strict";
console.log("Hello world!!!");
let arr = ["Making my way", "Faded", "PickerBall", "Happy"];
let arr1 = [666, 677, 888, 999];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let numbers;
for (let numbers of arr1) {
    console.log(numbers);
}
let index;
for (let index in arr) {
    console.log(index, arr[index]);
}
arr.push("The Liems");
console.log(arr);
arr.pop();
arr.shift();
arr.splice(2, 1);
console.log(arr.shift());
let phoneList;
phoneList = ["09341413149"];
let person = {
    name: " nguyen van an",
    age: 20,
    hobbies: ["picker ball", "films"],
    gender: true
};
let students = [
    {
        id: 1,
        name: "nguyen van b",
        age: 10
    },
    {
        id: 2,
        name: "nguyen van c",
        age: 15
    }
];
let roles;
roles: ["admin", "moderator", "user"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["MODERATOR"] = 12] = "MODERATOR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.USER);
console.log(Role.MODERATOR);
let role = {
    ADMIN: 0,
    MODERATOR: 1,
    USER: 2,
};
var langueges;
(function (langueges) {
    langueges["Hello"] = "Bonjour!!!";
    langueges["langueges"] = "Phap";
})(langueges || (langueges = {}));
;
console.log(langueges);
let randomValue;
randomValue = "HELLO WORLD";
randomValue = 100;
randomValue = false;
let num = [10, 11, 12, 14, 14, 18];
let newArr = num.map(function (element, index) {
    return element * element;
});
console.log(newArr);
function map(arr, fn) {
    let result = [];
    for (let i in arr) {
        let mapElement = fn(arr[i], +i);
        result.push(mapElement);
    }
    return result;
}
let resultArr = map([3, 5, 7, 9, 11], function (element, index) {
    return element * element;
});
console.log(resultArr);
