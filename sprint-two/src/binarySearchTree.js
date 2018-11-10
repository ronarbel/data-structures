var BinarySearchTree = function(value) {
  var obj = {};

  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.depth = 1;

  obj.insert = function(val) {
    var newNode = BinarySearchTree(val);

    if (newNode.value < this.value) {
      if (this.left === null) {
        this.left = newNode;
        this.left.depth = this.depth + 1;
      } else {
        this.left.insert(val);
      }
    }

    if (newNode.value > this.value) {
      if (this.right === null) {
        this.right = newNode;
        this.right.depth = this.depth + 1;
      } else {
        this.right.insert(val);
      }
    }
  };

  obj.contains = function(val) {
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

  obj.depthFirstLog = function(func) {
    func(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(func);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(func);
    }
  };

  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?

  .insert is O(n) because worst case a user could add
    consecutively higher or lower numbers, resulting in a severely unbalanced tree.

  .contains is O(n) because worst case a user could add
    consecutively higher or lower numbers, resulting in a severely unbalanced tree.

  .depthFirstLog is 0(n) because it needs to visit every node.
 */
