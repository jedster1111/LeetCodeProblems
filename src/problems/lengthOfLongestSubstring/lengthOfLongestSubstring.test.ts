// @param {string} s
// @return {number}

import lengthOfLongestSubstring from "./lengthOfLongestSubstring";

test("input abcabcbb should return 3", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});
test("input bbbbb should return 1", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});
test("input pwwkew should return", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});
test("input abba should return 2", () => {
  expect(lengthOfLongestSubstring("abba")).toBe(2);
});
test('input of "" should return 0', () => {
  expect(lengthOfLongestSubstring("")).toBe(0);
});
