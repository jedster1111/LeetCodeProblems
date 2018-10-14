/*
https://leetcode.com/problems/palindrome-number/description/

@param {number} x
@return {boolean}
*/

import isPalindrome from "./palindromeNumber";

test("input 121 returns true", () => {
  expect(isPalindrome(121)).toBe(true);
});
test("input -121 returns false", () => {
  expect(isPalindrome(-121)).toBe(false);
});
test("input 10 returns false", () => {
  expect(isPalindrome(10)).toBe(false);
});
test("input 0 returns true", () => {
  expect(isPalindrome(0)).toBe(true);
});
