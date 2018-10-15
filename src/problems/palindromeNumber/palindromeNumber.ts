// https://leetcode.com/problems/palindrome-number/description/

/**
 * Checks whether an integer is a palindrome or not. An integer is a palindrome when it reads the same backward as forward.
 * @example
 * isPalindrome(121) // true
 * isPalindrome(-121) // false
 * isPalindrome(10) // false
 * @param x The number to be checked.
 * @returns True or false.
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
