var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextToEnqueue = 0;
  this.nextToDequeue = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nextToEnqueue] = value;
  this.nextToEnqueue ++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.nextToDequeue];
  delete this.storage[this.nextToDequeue];
  this.nextToDequeue ++;
  return result;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
