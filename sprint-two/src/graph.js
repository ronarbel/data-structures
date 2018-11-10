

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    arcs: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this[node] !== undefined) {
    var arcsToDeleteArr = this[node].arcs;
    for (var i = 0; i < arcsToDeleteArr.length; i++) {
      this.removeEdge(node, arcsToDeleteArr[i]);
    }
    delete this[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].arcs.includes(toNode) && this[toNode].arcs.includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].arcs.push(toNode);
  this[toNode].arcs.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromArcs = this[fromNode].arcs;
  for (var i = 0; i < fromArcs.length; i++) {
    if (fromArcs[i] === toNode) {
      this[fromNode].arcs.splice(i, 1);
    }
  }
  var toArcs = this[toNode].arcs;
  for (var i = 0; i < toArcs.length; i++) {
    if (toArcs[i] === fromNode) {
      this[toNode].arcs.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var vertices = Object.keys(this);
  for (var i = 0; i < vertices.length; i++) {
    cb(Number(vertices[i]));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

  .addNode has O(1), constant, because it is always one object's instantiation

  .contains has O(n), linear, because Object.hasOwnProperty iterates over the length of the object's keys

  .removeNode has O(1), constant, for best cases when removed node is connected to a trivial number of other nodes
      .removeNode has O(n), linear, for worst cases when removed node is connected to all other nodes in the graph

  .hasEdge has O(1), constant, for best cases when node is connected to a trivial number of other nodes
      .hasEdge has O(n), linear, for worst cases when node is connected to all other nodes in the graph

  .addEdge has O(1), constant, because it always consists of two distinct addition operations

  .removeEdge has O(1), constant, for best cases when targeted node is connected to a trivial number of other nodes
      .removeEdge has O(n), linear, for worst cases when targeted node is connected to all other nodes in the graph

  .forEachNode has O(n), linear, because it always iterates over every node in the graph
 */


