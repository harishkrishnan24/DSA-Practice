class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  if (!root) return;

  inorderTraversal(root.left);
  console.log(root.value);
  inorderTraversal(root.right);
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);

inorderTraversal(root);
