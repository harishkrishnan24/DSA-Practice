class BinaryHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
  }

  left(idx) {
    return 2 * idx + 1;
  }

  right(idx) {
    return 2 * idx + 2;
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
}
