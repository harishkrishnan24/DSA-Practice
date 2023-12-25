let memo = new Array(100).fill(null);

function fibonacci(num) {
  if (!memo[num]) {
    if (num === 0 || num === 1) {
      return num;
    }

    memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return memo[num];
}

console.log(fibonacci(5));
// 0 1 1 2 3 5
