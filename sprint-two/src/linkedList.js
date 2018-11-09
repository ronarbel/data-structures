var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.headIndex = null;
  var nextIndex = 0;

  list.addToTail = function(value) {
    if (list[nextIndex - 1] === undefined) {
      var newTail = Node(value);
      list[nextIndex] = newTail;

      list.tail = list[nextIndex];
      list.head = list[nextIndex];
      list.headIndex = nextIndex;

      nextIndex++;
    } else {
      list[nextIndex - 1].next = nextIndex;

      var newTail = Node(value);
      list[nextIndex] = newTail;

      list.tail = list[nextIndex];

      nextIndex++;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;

    console.log(oldHead);
    newHeadIndex = list.head.next
    delete list.head;
    delete list[list.headIndex];
    list.head = list[newHeadIndex];
    list.headIndex = newHeadIndex;
    return oldHead.value;;
  };

  list.contains = function(target) {
    for (var key in list) {
      if (typeof(Number(key)) === 'number') {
        if (list[key].value === target) {
          return true;
        }
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
 */
