"use strict";
function checkString(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        else {
            const top = stack.pop();
            if (top === undefined || map[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
let inputString = String(prompt("Enter string need check: "));
let result = checkString(inputString);
console.log(result);
