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
    let { value, left, right} = this;
    let children = [left, right];

    callback(value);

    children.forEach(child => {
      if (child !== null) {
        child.depthFirst(callback);
      }
    });
  }

  free() {
    this.value = null;
    this.left = null;
    this.right = null;
  }

  balance() {
    let elements = [];
    this.depthFirst(el => elements.push(el));
    this.free();

    const addMiddle = nodeArr => {
      if (nodeArr.length === 0) return;

      const middleIndex = Math.floor((nodeArr.length - 1) / 2);
      this.add(nodeArr[middleIndex]);
      
      addMiddle(nodeArr.slice(0, middleIndex));
      addMiddle(nodeArr.slice(middleIndex + 1));
    }

    addMiddle(elements);
  }
}

module.exports = BinaryTree;
