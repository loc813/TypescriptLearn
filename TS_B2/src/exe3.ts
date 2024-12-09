let stringArray: Array<string> = ["apple", "banana", "cherry", "date", "elderberry"];

let numberArr: Array<number> = [1, 2, 3, 4, 5];

function reverseArrayNum(arr: Array<number>): void {
    for(let i: number = arr.length - 1 ; i >= 0 ; i--){
        console.log(arr[i]);
    }
}

function reverseArrayStr(arr: Array<string>): void {
    for(let i: number = arr.length - 1 ; i >= 0 ; i--){
        console.log(arr[i]);
    }
}

reverseArrayNum(numberArr);
reverseArrayStr(stringArray);