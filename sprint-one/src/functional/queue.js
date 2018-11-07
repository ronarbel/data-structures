var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextToEnqueue = 0;
  var nextToDequeue = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[nextToEnqueue] = value;
    nextToEnqueue ++;
  };

  someInstance.dequeue = function() {
    var result = storage[nextToDequeue];
    delete storage[nextToDequeue];
    nextToDequeue ++;
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
