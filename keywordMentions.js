/*
Given a list of reviews, a list of keywords and an integer k. Find the most popular k keywords in
order of most to least frequently mentioned.

The comparison of strings is case-insensitive. If keywords are mentioned an equal number of times
in reviews, sort alphabetically.

Example 1:

Input:
k = 2
keywords = ["anacell", "cetracular", "betacellular"]
reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
]

Output:
["anacell", "betacellular"]

Explanation:
"anacell" is occuring in 2 different reviews and "betacellular" is only occuring in 1 review.

Example 2:

Input:
k = 2
keywords = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]

Output:
["betacellular", "anacell"]

Explanation:
"betacellular" is occuring in 3 different reviews. "anacell" and "deltacellular" are occuring in
2 reviews, but "anacell" is lexicographically smaller.
*/

const topKeywords = (reviews, keywords, k) => {
  const keywordMentions = {};

  reviews.forEach((review) => {
    const reviewLower = review.toLowerCase();

    keywords.forEach((keyword) => {
      const keywordLower = keyword.toLowerCase();

      if (!reviewLower.includes(keywordLower)) return;

      const mentions = keywordMentions[keywordLower];

      if (mentions === undefined) {
        keywordMentions[keywordLower] = 1;
      } else {
        keywordMentions[keywordLower] += 1;
      }
    });
  });

  const keywordMentionKeys = Object.keys(keywordMentions);

  const orderedMentions = keywordMentionKeys.sort((a, b) => (
    keywordMentions[b] - keywordMentions[a]
  ));

  return orderedMentions.slice(0, k);
};
