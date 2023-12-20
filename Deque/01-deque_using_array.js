class Deque {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.front = 0;
    this.items = [];
  }

  isFull() {
    return this.capacity === this.size;
  }

  isEmpty() {
    return !this.size;
  }

  insertRear(item) {
    if (this.isFull()) return;
    const rear = (this.front + this.size) % this.capacity;
    this.items[rear] = item;
    this.size++;
  }

  insertFront(item) {
    if (this.isFull()) return;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.items[this.front] = item;
    this.size++;
  }

  deleteFront() {
    if (this.isEmpty()) return;
    const item = this.items[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return item;
  }

  deleteRear() {
    if (this.isEmpty()) return;
    const item = this.items[(this.front + this.size - 1) % this.capacity];
    this.size--;
    return item;
  }
}

let deq = new Deque(5);
deq.insertRear(10);
deq.insertFront(20);
deq.insertRear(30);
deq.insertFront(40);
console.log(deq.deleteFront());
console.log(deq.deleteRear());

// 20 10
// 40 20 10 30
