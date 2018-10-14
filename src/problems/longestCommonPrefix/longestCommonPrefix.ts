/*
https://leetcode.com/problems/longest-common-prefix/description/
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
	Input: ["flower","flow","flight"] => Output: "fl"
	Input: ["dog","racecar","car"] => Output: ""
All given inputs are in lowercase letters a-z.

@param {string[]} strs
@return {string}
*/

interface Letters {
  [key: number]: string;
}

const longestCommonPrefix = (inputStrings: string[]) => {
  const letters: Letters = {};
  if (Array.isArray(inputStrings) && inputStrings.length) {
    for (let i = 0; i < inputStrings.length; i++) {
      for (let j = 0; j < inputStrings[i].length + 1; j++) {
        const letter = inputStrings[i].slice(0, j);
        const reg = new RegExp(`^${letter}`);
        if (i === 0 || reg.test(letters[i])) {
          letters[i + 1] = letter;
        }
      }
      if (!letters[i + 1]) {
        return "";
      }
    }
    return letters[inputStrings.length];
  }
  return "";
};

export default longestCommonPrefix;
