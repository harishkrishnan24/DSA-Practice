class Stack {
  constructor() {
    this.elements = [];
  }

  push(el) {
    this.elements.push(el);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return !this.elements.length;
  }
}

let s = new Stack(5);
s.push(5);
s.push(10);
s.push(20);
console.log(s.pop());
console.log(s.size());
console.log(s.peek());
console.log(s.isEmpty());
