function GCD(num1, num2) {
  // Using Euclidean algorithm
  if (num2 === 0) {
    return num1;
  }

  return GCD(num2, num1 % num2);
}

console.log(GCD(12, 8)); // Expected: 4
console.log(GCD(15, 25)); // Expected: 5
console.log(GCD(7, 13)); // Expected: 1
console.log(GCD(100, 50)); // Expected: 50
console.log(GCD(0, 5)); // Expected: 5
console.log(GCD(17, 17)); // Expected: 17
