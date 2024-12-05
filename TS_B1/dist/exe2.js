"use strict";
let firstName;
let lastName;
let surName;
firstName = "bui";
lastName = "loc";
surName = "dinh";
function upperCase(fullName) {
    if (fullName.length === 0) {
        return fullName;
    }
    return fullName.charAt(0).toUpperCase() + fullName.slice(1);
}
;
upperCase(firstName);
upperCase(lastName);
upperCase(surName);
function connectString(str1, str2, str3) {
    return str1 + " " + str3 + " " + str2;
}
console.log(connectString(upperCase(firstName), upperCase(lastName), upperCase(surName)));
