let nums: number[] = [1,2,3,4,5,6,7,8,9,10];

let numTarget: number = Number(prompt("Enter input: "));

function searchSumOnTarget(nums: number[], target: number){
    for(let i:number = 0; i < nums.length; i ++){
        for(let j:number = i +1 ; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                console.log(`[${i}, ${j}]`);
            }
        }
    }
}

searchSumOnTarget(nums,numTarget);