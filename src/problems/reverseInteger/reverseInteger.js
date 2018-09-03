/*
https://leetcode.com/problems/reverse-integer/description/
Given a 32-bit signed integer, reverse digits of an integer.
	Input: 123 => Output: 321
	Input: -123 => Output: -321
	Input: 120 => Output: 21
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

@param {number} x
@return {number}
*/

const reverseInteger = function(x) {
	const limit = Math.pow(2,31) - 1;
	let splitNumber = x.toString().split("");
	if(splitNumber.indexOf("-") !== -1) {
		const reversedNumber = Number(splitNumber.slice(1).reverse().join(""));
		return (reversedNumber < limit ? -reversedNumber : 0);
	}
	else {
		const reversedNumber = Number(splitNumber.reverse().join(""));
		return (reversedNumber < limit ? reversedNumber : 0);
	}
};
export default reverseInteger;