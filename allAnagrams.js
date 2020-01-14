/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

const allAnagrams = string => {
  let anagrams = [];

  const addNextLetter = (partial, charsToAddArray) => {
    if (partial.length === string.length) {
      anagrams.push(partial);
      return;
    }

    charsToAddArray.forEach((char, i) => {
      const nextCharsToAddArray = [
        ...charsToAddArray.slice(0, i),
        ...charsToAddArray.slice(i + 1)
      ];

      addNextLetter(partial + char, nextCharsToAddArray);
    });
  };

  addNextLetter('', string.split(''));

  return [...new Set(anagrams)];
};
