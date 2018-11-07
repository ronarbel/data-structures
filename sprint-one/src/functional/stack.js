var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextStack = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[nextStack] = value;
    nextStack++;
  };

  someInstance.pop = function() {
    var result = storage[nextStack - 1];
    delete storage[nextStack - 1];
    nextStack--;
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
