const generateParentheses = (n) => {
  const parenArray = [];

  const buildParentheses = (parenStr, openCount) => {
    if (parenStr.length === 2 * n) {
      if (openCount === 0) {
        parenArray.push(parenStr);
      }
      return;
    }

    buildParentheses(`${parenStr}(`, openCount + 1);

    if (openCount > 0) {
      buildParentheses(`${parenStr})`, openCount - 1);
    }
  };

  buildParentheses('(', 1);
  return parenArray;
};
