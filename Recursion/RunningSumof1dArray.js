/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].*/

const nums = [1,2,3,4];
const n = nums.length;
for(let i=1; i<n; i++){
    nums[i] += nums[i-1]
}
console.log(nums);