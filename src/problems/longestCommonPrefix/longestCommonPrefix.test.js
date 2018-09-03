/*
https://leetcode.com/problems/longest-common-prefix/description/

@param {string[]} strs
@return {string}
*/

import longestCommonPrefix from "./longestCommonPrefix";

test("input [\"flower\",\"flow\",\"flight\"]", () => {
	expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
});
test("input [\"dog\",\"racecar\",\"car\"]", () => {
	expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
});