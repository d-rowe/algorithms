/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

const powerSet = (str) => {
  const charArray = [...new Set(str)];
  const sets = [''];

  const addChars = (word, startIndex) => {
    for (let i = startIndex; i < charArray.length; i += 1) {
      const char = charArray[i];
      const newWord = word + char;

      sets.push(newWord);
      addChars(newWord, i + 1);
    }
  };

  addChars('', 0);

  return sets;
};
