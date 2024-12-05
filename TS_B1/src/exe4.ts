let a: number | string = 6789; 
let b: number | string  = "135";


function plusTwoNumber(a: number | string , b: number | string){
    return Number(a) + Number(b);
}

let checkSum = plusTwoNumber(a,b);
console.log( `Sum = ${checkSum}`);


function subTwoNumber(a: number | string , b: number | string){
    return Number(a) -  Number(b);
}

let checkSub = subTwoNumber(a,b);
console.log( `Sub = ${checkSub}`);

function mulTwoNumber(a: number | string , b: number | string){
    return Number(a) * Number(b);
}

let checkMul = mulTwoNumber(a,b);
console.log( `Mul = ${checkMul}`);

function divTwoNumber(a: number | string , b: number | string){
    return Number(a) % Number(b);
}

let checkDiv = divTwoNumber(a,b);
console.log( `Sum = ${checkDiv}`);


