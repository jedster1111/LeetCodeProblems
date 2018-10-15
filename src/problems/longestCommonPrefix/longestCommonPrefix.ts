// https://leetcode.com/problems/longest-common-prefix/description/

interface Letters {
  [key: number]: string;
}

/**
 *  Returns the longest common prefix string amongst an array of strings.
 *  If there is no common prefix, returns an empty string.
 * @param inputStrings An array of strings to be checked.
 * @example
 *
 *  longestCommonPrefix(["flower","flow","flight"]); // "fl"
 */

const longestCommonPrefix: (
  inputStrings: string[]
) => string = inputStrings => {
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
