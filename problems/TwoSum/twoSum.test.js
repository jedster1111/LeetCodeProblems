// https://leetcode.com/problems/two-sum/description/

// @param {number[]} nums
// @param {number} target
// @return {number[]}

const TwoSum = require('./TwoSum');

test('given array [2,7,11,15] and target 9, returns [0,1]', () => {
    expect(TwoSum([2,7,11,15], 9)).toEqual([0,1]);
});
test('given array [1,2,3,6] and target 1, returns null', () => {
    expect(TwoSum([1,2,3,6], 1)).toBeNull;
});