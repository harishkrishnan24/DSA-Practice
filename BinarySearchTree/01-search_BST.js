class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function searchBST(root, searchValue) {
  if (!root) return false;

  if (root.value === searchValue) {
    return true;
  } else if (root.value < searchValue) {
    return searchBST(root.right, searchValue);
  } else {
    return searchBST(root.left, searchValue);
  }
}

let root = new Node(15);
root.left = new Node(5);
root.left.left = new Node(3);
root.right = new Node(20);
root.right.left = new Node(18);
root.right.left.left = new Node(16);
root.right.right = new Node(80);

console.log(searchBST(root, 55));
