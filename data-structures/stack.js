class Stack {
  constructor() {
    this._mins = [];
    this._items = [];
  }

  push(value) {
    this._items.push(value);
    if (this._mins.length > 0) {
      let lastMin = this._mins[this._mins.length - 1];
      if (value < lastMin) {
        this._mins.push(value);
      } else {
        this._mins.push(lastMin);
      }
    } else {
      this._mins.push(value);
    }
  }

  pop() {
    this._mins.pop();
    return this._items.pop();
  }

  size() {
    return this._items.length;
  }

  min() {
    return this._mins[this._mins.length - 1];
  }
}
