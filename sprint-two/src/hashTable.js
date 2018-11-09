

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // initialize array in each element of storage []
  this.getIndexBelowMaxForKey
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // intput: key and its value
  // pass key and current bucket limit into hash function
    // returns index
  // var newTuple = [key, value];
  // get current content at index
  // push new tuple into current content
  // pass index and [[key,value], [key,value]] into this._storage.set

  var newTuple = [k, v];
  var bucketContents = this._storage.get(index);
  if (bucketContents === undefined) {
    bucketContents = [];
  }
  bucketContents.push(newTuple);
  this._storage.set(index, bucketContents);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketContents = this._storage.get(index);
  return bucketContents.forEach(function(tuple) {
    if (tuple[0] === k) {
      return tuple[1];
    }
  });
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// how to implement rehashing function when ratio tuples : bucket.length > 0.75