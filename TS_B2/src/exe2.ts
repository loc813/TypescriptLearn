let arr3: Array<number> = [1, 2, 4, 5, 6, 19, 20, 89, 110, 0];

function searchMax(arr: Array<number>): number {
    let temp: number = arr[0]; 
    for (let value of arr) {
        if (value > temp) {
            temp = value;
        }
    }
    return temp;
}

function searchMin(arr: Array<number>){
    let temp: number = arr[0];
    for( let value of arr){
        if(value < temp){
            temp = value;
        }
    }
    return temp;
}

console.log(`Min: ${searchMin(arr3)}`);

console.log(`Max: ${searchMax(arr3)}`);




