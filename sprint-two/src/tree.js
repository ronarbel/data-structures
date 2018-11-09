var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // this.children.push(value);
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // base case: if current obj.value === target
    // return true;
  // else for each child in obj.children
    // obj.children[el].contains(target)
  // return false;
  
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
 */
