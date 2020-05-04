const validParentheses = (s) => {
  const stack = [];
  const openMap = { ')': '(', '}': '{', ']': '[' };

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);
    const openChar = openMap[char];

    if (openChar === undefined) {
      stack.push(char);
    } else if (stack.pop() !== openChar) {
      return false;
    }
  }

  return stack.length === 0;
};
