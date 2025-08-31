function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // Expected: 120
console.log(factorial(0)); // Expected: 1
console.log(factorial(1)); // Expected: 1
console.log(factorial(3)); // Expected: 6
console.log(factorial(7)); // Expected: 5040
