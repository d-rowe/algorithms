/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

const binarySearch = (arr, target) => {
  const match = (i, bounds) => {
    const item = arr[i];

    if (item === target) return i; // Successful break case
    if (bounds[0] === bounds[1]) return null; // No match break case

    const nextBounds = target < item
      ? [bounds[0], i - 1] // Lower upper bound to values < i
      : [i + 1, bounds[1]]; // Raise lower bound to values > i

    const mid = Math.floor((nextBounds[0] + nextBounds[1]) / 2);
    return match(mid, nextBounds);
  };

  return match(Math.floor(arr.length / 2), [0, arr.length - 1]);
};
