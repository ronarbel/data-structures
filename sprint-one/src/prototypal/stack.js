var Stack = function() {
  // PROTOTYPAL Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.nextStack = 0;

  return newStack;
};

var stackMethods = {
  size: function() {
    var length = 0;
    for (var key in this.storage) {
      length++;
    }
    return length;
  },
  push: function(newItem) {
    this.storage[this.nextStack] = newItem;
    this.nextStack++;
  },
  pop: function() {
    var result = this.storage[this.nextStack - 1];
    delete this.storage[this.nextStack - 1];
    this.nextStack--;
    return result;
  }
};
