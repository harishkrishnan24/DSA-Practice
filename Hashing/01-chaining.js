class Chaining {
  data = new Array(7).fill([]);

  insert(number) {
    const bucket = number % 7;

    this.data[bucket].push(number);
  }

  search(number) {
    const bucket = number % 7;

    return this.data[bucket].includes(number);
  }

  delete(number) {
    const bucket = number % 7;

    this.data[bucket] = this.data[bucket].filter((n) => n !== number);
  }
}
