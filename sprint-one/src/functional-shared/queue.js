var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.nextToEnqueue = 0;
  newQueue.nextToDequeue = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
  size: function() {
    var length = 0;
    for (var key in this.storage) {
      length++;
    }
    return length;
  },
  enqueue: function(newItem) {
    this.storage[this.nextToEnqueue] = newItem;
    this.nextToEnqueue++;
  },
  dequeue: function() {
    var result = this.storage[this.nextToDequeue];
    delete this.storage[this.nextToDequeue];
    this.nextToDequeue++;
    return result;
  }
};
