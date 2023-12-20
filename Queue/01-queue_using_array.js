class Queue {
  constructor(size) {
    this.capacity = size;
    this.items = new Array(size);
    this.front = 0;
    this.size = 0;
    this.rear = size - 1;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(item) {
    if (this.isFull()) return;
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = item;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    let item = this.items[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return item;
  }
}

let queue = new Queue(1000);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue.dequeue());
