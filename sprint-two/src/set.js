var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  var containsAllArgs = true;
  for (var i = 0; i < arguments.length; i++) {
    if (this._storage[arguments[i]] === undefined || containsAllArgs === false) {
      containsAllArgs = false;
    }
  }
  return containsAllArgs;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?

  .add has O(1)
  .contains has O(n)
  .remove has O(1)
 */
