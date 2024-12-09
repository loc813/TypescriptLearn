"use strict";
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numTarget = Number(prompt("Enter input: "));
function searchSumOnTarget(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(`[${i}, ${j}]`);
            }
        }
    }
}
searchSumOnTarget(nums, numTarget);
