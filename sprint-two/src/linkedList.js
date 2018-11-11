var LinkedList = function() {
  var list = {};
  
  list.head = null;
  list.tail = null;
  list.counter = 0;
  
  list.addToTail = function(value) {
    
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    
    list.counter++;
  };
  
  list.removeHead = function() {
    formerHead = list.head;
    list.head = list.head.next;
    list.counter--;
    return formerHead.value;
  };
  
  list.contains = function(value) {
    
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      } 
    }
    return false;
  };
  
  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};




/*
  * Complexity: What is the time complexity of the above functions?

  .addToTail has O(1)
  .removeHead has O(1)
  .contains has O(n)
*/
