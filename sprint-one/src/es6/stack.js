class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.nextStack = 0;
  }

  push(value) {
    this.storage[this.nextStack] = value;
    this.nextStack++;
  }

  pop() {
    var result = this.storage[this.nextStack - 1];
    delete this.storage[this.nextStack - 1];
    this.nextStack--;
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
