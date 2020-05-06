const addTwoNumbers = (l1, l2) => {
  const sumList = { next: null };
  let sum = 0;
  let carry = 0;
  let curr = sumList;

  while (l1 || l2 || carry) {
    sum += carry;
    carry = 0;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry += 1;
      sum -= 10;
    }

    curr.next = { val: sum, next: null };
    curr = curr.next;

    sum = 0;
  }

  return sumList.next;
};
