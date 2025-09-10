function trailingZeroesInAFactorial(num) {
  let result = 0;

  for (let i = 5; i <= num; i = i * 5) {
    result += Math.floor(num / i);
  }

  return result;
}

// Test cases
console.log(trailingZeroesInAFactorial(5)); // Expected: 1
console.log(trailingZeroesInAFactorial(10)); // Expected: 2
console.log(trailingZeroesInAFactorial(25)); // Expected: 6
console.log(trailingZeroesInAFactorial(100)); // Expected: 24
