// https://leetcode.com/problems/reverse-integer/description/

/**
 * A function to reverse the digits of an integer.
 * Assumes an environment which can only store integers withing the 32-bit signed integer range: [−231,  231 − 1].
 * So when the reversed integer overflows, the function will return 0.
 * @example
 *
 * reverseInteger(123) // 321
 * reverseInteger(-123) // -321
 * reverseInteger(120) // 21
 * reverseInteger(7600000003) // 0
 *
 * @param x The number to be checked
 */
const reverseInteger: (x: number) => number = x => {
  const limit = Math.pow(2, 31) - 1;
  const splitNumber = x.toString().split("");
  if (splitNumber.indexOf("-") !== -1) {
    const reversedNumber = Number(
      splitNumber
        .slice(1)
        .reverse()
        .join("")
    );
    return reversedNumber < limit ? -reversedNumber : 0;
  } else {
    const reversedNumber = Number(splitNumber.reverse().join(""));
    return reversedNumber < limit ? reversedNumber : 0;
  }
};
export default reverseInteger;
