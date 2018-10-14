/*
https://leetcode.com/problems/longest-common-prefix/description/

@param {string[]} strs
@return {string}
*/

import longestCommonPrefix from "./longestCommonPrefix";

test('input ["flower","flow","flight"] should return "f1"', () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});
test(`input ["test","tested","retested"] should return "test"`, () => {
  expect(longestCommonPrefix(["test", "tested", "testing"])).toBe("test");
});
test('input ["dog","racecar","car"] should return ""', () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
