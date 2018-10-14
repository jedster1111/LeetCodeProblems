/*
https://leetcode.com/problems/palindrome-number/description/
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
	Input: 121 => Output: true
	Input: -121 => Output: false
	Input: 10 => Output: false
Follow up: Could you solve it without converting the integer to a string?

@param {number} x
@return {boolean}
*/

const isPalindrome: (x: number) => boolean = x => {
  return (
    x ===
    Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    )
  );
};
export default isPalindrome;
