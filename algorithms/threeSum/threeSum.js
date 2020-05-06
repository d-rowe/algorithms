const threeSum = (nums) => {
  const solutionSet = new Set();
  const numOccur = new Map();

  // Map numbers to their occurences in the input array
  nums.forEach((num) => {
    const count = numOccur.get(num);
    if (count === undefined) {
      numOccur.set(num, 1);
    } else {
      numOccur.set(num, count + 1);
    }
  });

  const distinctNums = [...numOccur.keys()];

  distinctNums.forEach((n1, i) => {
    for (let j = i; j < distinctNums.length; j += 1) {
      // If we are checking the same index against itself, it should be duplicated in the nums array
      if (i === j && numOccur.get(n1) < 2) continue;

      const n2 = distinctNums[j];
      // Compliment to this pair
      const compliment = 0 - (n1 + n2);

      // How many times the compliment appears in nums
      let complimentCount = numOccur.get(compliment);
      // No compliment available
      if (complimentCount === undefined) continue;

      // Subtract from compliment count if they are being used by member(s) of the pair
      if (n1 === compliment) complimentCount -= 1;
      if (n2 === compliment) complimentCount -= 1;

      // The compliment only exists in our pair
      if (complimentCount <= 0) continue;

      // Sort and add serialized solution to set
      const sol = [n1, n2, compliment].sort();
      solutionSet.add(JSON.stringify(sol));
    }
  });

  // Fill array with deserialized solutions
  const solutions = [];
  solutionSet.forEach((solStr) => solutions.push(JSON.parse(solStr)));
  return solutions;
};
