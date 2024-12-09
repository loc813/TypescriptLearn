function deleteInvalidOnTring(str: string): string {
    const regex = new RegExp('[^a-zA-Z]', 'g'); 
    return str.replace(regex, "");
}

function check(str: string): boolean {
    str = deleteInvalidOnTring(str.toLowerCase()); 
    let newString = "";
    for (let i: number = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString === str;
}

let inputStr = String(prompt("Enter string you wanna check: "));
let res: boolean = check(inputStr);
console.log(res); 
