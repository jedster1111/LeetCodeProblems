/*
https://leetcode.com/problems/two-sum/description/
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

@param {number[]} nums
@param {number} target
@return {number[]}
*/

interface Compliments {
  [key: string]: number;
}

const twoSum: (nums: number[], target: number) => number[] | null = (
  nums,
  target
) => {
  const compliments: Compliments = {};
  for (let i = 0; i < nums.length; i++) {
    const neededComp = target - nums[i];
    if (compliments.hasOwnProperty(nums[i])) {
      return [compliments[nums[i]], i];
    } else {
      compliments[neededComp] = i;
    }
  }
  return null;
};

export default twoSum;
