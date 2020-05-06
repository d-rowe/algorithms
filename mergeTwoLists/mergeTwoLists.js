const mergeTwoLists = (l1, l2) => {
  const merged = { next: null };
  let cn = merged;
  let n1 = l1;
  let n2 = l2;

  while (n1 && n2) {
    if (n1.val > n2.val) {
      cn.next = n2;
      n2 = n2.next;
    } else {
      cn.next = n1;
      n1 = n1.next;
    }

    cn = cn.next;
  }

  cn.next = n1 || n2;

  return merged.next;
};
