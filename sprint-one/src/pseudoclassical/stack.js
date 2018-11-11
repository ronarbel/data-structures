var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextStack = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.nextStack] = value;
  this.nextStack++;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.nextStack - 1];
  delete this.storage[this.nextStack - 1];
  this.nextStack--;
  return result;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
