function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumbers: number[] = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(getRandomNumber(1, 500));
}

console.log(`Array Origin: ${randomNumbers}`);


function sortArray(arr: Array<number>):void{
    let temp: number;
    for(let i: number = 0 ; i < arr.length; i++){
        for(let j: number = i + 1; j <arr.length ; j++){
            if(arr[i] < arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(`Array Sorted: ${arr}`);
}

sortArray(randomNumbers);