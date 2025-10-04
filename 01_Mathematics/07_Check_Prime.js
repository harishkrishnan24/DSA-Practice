function checkPrime(num) {
  if (num <= 1) return false;

  if (num < 4) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Test cases to verify the checkPrime function
console.log("Testing checkPrime function:");
console.log("checkPrime(2):", checkPrime(2)); // Should be true
console.log("checkPrime(3):", checkPrime(3)); // Should be true
console.log("checkPrime(4):", checkPrime(4)); // Should be false
console.log("checkPrime(17):", checkPrime(17)); // Should be true
console.log("checkPrime(25):", checkPrime(25)); // Should be false
console.log("checkPrime(1):", checkPrime(1)); // Should be false
console.log("checkPrime(0):", checkPrime(0)); // Should be false
console.log("checkPrime(29):", checkPrime(29)); // Should be true
