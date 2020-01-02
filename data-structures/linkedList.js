// TODO: add remove method

class LinkedList {
  constructor(...elements) {
    this.head = null;
    this.tail = null;

    elements.forEach(element => {
      this.add(element);
    })
  }

  add(element) {
    const node = new Node(element);
    
    if (this.tail === null) this.tail = node;
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head;
          
      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
      this.tail = node;
    };
  }

  removeHead() {
    const prevHeadElement = this.head.element;
    this.head = this.head.next;

    return prevHeadElement;
  }

  removeTail() {
    let current = this.head;
    if (current === null) return;

    while (current.next !== null && current.next.next !== null) {
      current = current.next;
    }
    
    current.next = null;

    const prevTailElement = this.tail.element;
    this.tail = current;

    return prevTailElement;
  }

  get(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      if (current.next !== null) {
        current = current.next;
      } else {
        return undefined;
      }
    }

    return node.element;
  }

  length() {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      current = current.next;
      index += 1;
    }

    return index;
  }

  middle() {
    let fast = this.head;
    let slow = this.head;
  
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
  
    return slow.element;
  }

  indexOf(element) {
    let index = 0;
    let current = this.head;

    while(current !== null) {
      if (current.element === element) return index;

      current = current.next;
      index += 1;
    }

    return -1;
  }

  toArray() {
    let array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.element);
      current = current.next;
    }

    return array;
  }
}


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

module.exports = LinkedList;
