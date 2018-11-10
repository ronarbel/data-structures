

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    arcs: []
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // store this node's arcs
  // iterate over node's arcs
    // pass each node name (arcs[i]) into removeEdge(node, arcs[i])
  var arcsToDeleteArr = this[node].arcs;
  for (var i = 0; i < arcsToDeleteArr.length; i++) {
    this.removeEdge(node, arcsToDeleteArr[i]);
  }
  delete this[node];
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
 */


