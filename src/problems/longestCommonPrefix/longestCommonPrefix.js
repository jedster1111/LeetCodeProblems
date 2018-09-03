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

var longestCommonPrefix = function(strs) {
	let letters = {};
	if (Array.isArray(strs) && strs.length) {
		for(let i = 0; i < strs.length; i++) {
			for(let j = 0; j < strs[i].length + 1; j++) {
				const letter = strs[i].slice(0,j);
				const reg = new RegExp(`^${letter}`);
				if(i == 0 || reg.test(letters[i])) {
					letters[i+1] = letter;
				}
			}
			if(letters[i+1] == false){
				return "";
			}
		}
		return letters[strs.length];
	}
	return "";
};

export default longestCommonPrefix;