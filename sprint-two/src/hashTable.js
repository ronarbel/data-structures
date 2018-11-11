

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // initialize array in each element of storage []
  this.getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

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
  var result;
  bucketContents.forEach(function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    console.log('key not found in storage');
  } else {  
    var bucketContents = this._storage.get(index);
    var removeSuccessful = false;
    bucketContents.forEach(function(tuple, tupleIndex) {
      if (tuple[0] === k) {
        bucketContents.splice(tupleIndex, 1);
        removeSuccessful = true;
      }
    });
    if (!removeSuccessful) {
      console.log('key not found in storage');
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 
 .insert has O(1) to quickly become 0(n) until we create re-hashing functionality, at which point time complexity would become 0(log(n)).
 .retrieve has has O(1) to quickly become 0(n) until we create re-hashing functionality, at which point time complexity would become 0(log(n)).
 .remove has has O(1) to quickly become 0(n) until we create re-hashing functionality, at which point time complexity would become 0(log(n)).
 */


// how to implement rehashing function when ratio tuples : bucket.length > 0.75