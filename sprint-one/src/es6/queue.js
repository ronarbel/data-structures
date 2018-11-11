class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.nextToEnqueue = 0;
    this.nextToDequeue = 0;
  }

  enqueue(value) {
    this.storage[this.nextToEnqueue] = value;
    this.nextToEnqueue ++;
  }

  dequeue() {
    var result = this.storage[this.nextToDequeue];
    delete this.storage[this.nextToDequeue];
    this.nextToDequeue ++;
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
