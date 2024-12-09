function checkString(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top === undefined || map[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

let inputString: string = String(prompt("Enter string need check: "));
let result: boolean = checkString(inputString);
console.log(result);
