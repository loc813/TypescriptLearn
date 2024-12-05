
function power(a: number | string , b: number | string): number{
    let resultPow: number = 1;
    for( let i: number = 0 ; i < Number(b) ; i++){
        resultPow *= Number(a);
    }
    return resultPow;
}

function gt(a:number | string ): number {
    let resultGt: number = 1;
    for(let i: number = 0 ; i < Number(a) ; i++){
      resultGt *= (Number(a) - 1);
    }
    return resultGt;
};

function sqrt(a:number | string) : number {
  return Math.sqrt(Number(a));
}

function calculator(a: number | string , b: number | string){
    switch(Number(a), Number(b)) {
        case 1:
          plusTwoNumber(Number(a), Number(b));
          break;
        case 2:
          subTwoNumber(Number(a), Number(b));
          break;
        case 3: 
          mulTwoNumber(Number(a), Number(b));
          break;
        case 4: 
          subTwoNumber(Number(a), Number(b));
          break;
        case 5:
          gt(Number(a));
          break;
        case 6:
          power(Number(a), Number(b));
          break;
        case 7:
          sqrt(Number(a));
          break;
        default:
          console.log("Error please choose number 1 to 7");
          break;
      }
      
}

