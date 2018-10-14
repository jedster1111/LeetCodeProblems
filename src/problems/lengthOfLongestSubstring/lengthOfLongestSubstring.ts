/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
Given a string, find the length of the longest substring without repeating characters.

@param {string} s
@return {number}
*/

interface Letters {
  [index: string]: number;
}

const lengthOfLongestSubstring = (word: string) => {
  const chars = [...word];
  let result = 0;
  let lower = 0;
  let upper = 0;
  let length = upper - lower;
  const letters: Letters = {};
  while (upper < word.length) {
    const thisLetter = chars[upper];
    length = upper - lower;
    if (letters.hasOwnProperty(thisLetter) && letters[thisLetter] >= lower) {
      if (length > result) {
        result = length;
      }
      lower = letters[thisLetter] + 1;
    }
    letters[thisLetter] = upper;
    upper++;
  }
  length = upper - lower;
  if (length > result) {
    result = length;
  }
  return result;
};

export default lengthOfLongestSubstring;
