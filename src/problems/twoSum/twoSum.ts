// https://leetcode.com/problems/two-sum/description/

interface Compliments {
  [key: string]: number;
}

/**
 * A function that returns the indices of two numbers that add up to a specific target.
 * Only one solution will be returned and elements can't be summed with themselves.
 *
 * @param nums An array of integers to be summed.
 * @param target The target being checked against.
 * @returns Returns the indices of the two numbers that when summed together equals the target.
 */
const twoSum: (numbers: number[], target: number) => number[] | null = (
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
