class BinaryTree {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }

    let current = this;

    while (current.value !== null) {
      let side = value <= current.value ? 'left' : 'right';
      if (current[side] === null) {
        current[side] = new BinaryTree(value);
        return;
      } else current = current[side];
    }
  }

  depthFirst(callback) {
    let {value, left, right} = this;
    let children = [left, right];

    callback(value);

    children.forEach(child => {
      if (child !== null) {
        child.depthFirst(callback);
      }
    });
  }
}
