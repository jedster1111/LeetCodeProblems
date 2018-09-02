// https://leetcode.com/problems/two-sum/description/

// @param {number[]} nums
// @param {number} target
// @return {number[]}

var twoSum = function(nums, target) {
    let compliments = {};
    for(let i = 0; i<nums.length; i++) {
        const neededComp = target - nums[i];
        if(compliments.hasOwnProperty(nums[i])){
            return [compliments[nums[i]], i]
        }
        else {
            compliments[neededComp] = i;
        }
    }
    return null;
};

module.exports = twoSum;