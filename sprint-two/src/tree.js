var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.depth = 1;

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  this.children[this.children.length - 1].depth = this.depth + 1;
};

treeMethods.contains = function(target) {
  
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(target)) {
        return true;
      }
    }
  } return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 
 .addChild has O(1)
 .contains has O(n)
 */
