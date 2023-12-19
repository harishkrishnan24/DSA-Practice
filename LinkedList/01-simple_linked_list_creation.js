class Node {
  constructor(value, next) {
    this.data = value;
    this.next = next;
  }
}

const node2 = new Node(2);
const node1 = new Node(1, node2);

console.log(node1);
