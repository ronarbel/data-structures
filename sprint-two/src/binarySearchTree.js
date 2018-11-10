var BinarySearchTree = function(value) {
  var obj = {};

  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function (val) {
    var newNode = BinarySearchTree(val);

    if (newNode.value < this.value) {
      if (this.left === null) {
        this.left = newNode;
      } else {
        this.left.insert(val);
      }
    }

    if (newNode.value > this.value) {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.insert(val);
      }
    }
  };

  obj.contains = function (val) {
    if (this.value === val) {
      return true;  
    }
    if (this.value > val && this.left !== null) {
      return this.left.contains(val);
    }
    if (this.value < val && this.right !== null) {
      return this.right.contains(val);
    }

    return false;

  };

  obj.depthFirstLog = function () {

  };

  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
