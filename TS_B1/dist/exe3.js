"use strict";
function subStr(s) {
    let a = "";
    for (let i = 0; i < s.length; i++) {
        if (a.includes(s[i])) {
            continue;
        }
        else {
            a += s[i];
        }
    }
    return a;
}
let result = subStr("bannnana");
console.log(result);
