const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null;

  let n1 = l1;
  let n2 = l2;
  const Node = (val = null, next = null) => ({ val, next });
  const mergedList = Node();
  let currN = mergedList;

  const addToMerged = (n) => {
    if (currN.val !== null) {
      currN.next = Node(n.val);
      currN = currN.next;
    } else {
      currN.val = n.val;
    }

    if (n === n1) n1 = n1.next;
    if (n === n2) n2 = n2.next;
  };

  while (n1 || n2) {
    if (n1 && !n2) {
      addToMerged(n1);
      continue;
    }

    if (n2 && !n1) {
      addToMerged(n2);
      continue;
    }

    if (n1.val <= n2.val) {
      addToMerged(n1);
    } else {
      addToMerged(n2);
    }
  }

  return mergedList;
};
