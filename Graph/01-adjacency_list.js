function addEdge(graph, x, y) {
  if (!graph[x]) graph[x] = [];
  if (!graph[y]) graph[y] = [];
  graph[x].push(y);
  graph[y].push(x);
}

function printGraph(graph) {
  for (let v of graph) {
    let items = "";
    for (let e of v) {
      items += `${e} `;
    }
    console.log(items);
    items = "";
  }
}

const graph = new Array();

addEdge(graph, 0, 1);
addEdge(graph, 0, 2);
addEdge(graph, 1, 2);
addEdge(graph, 1, 3);

printGraph(graph);
