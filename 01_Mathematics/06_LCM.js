function computeGCD(a, b) {
  if (b === 0) return a;

  return computeGCD(b, a % b);
}

function computeLCM(a, b) {
  return (a * b) / computeGCD(a, b);
}

// Test cases
console.log(computeLCM(4, 6)); // Expected: 12
console.log(computeLCM(15, 20)); // Expected: 60
console.log(computeLCM(7, 9)); // Expected: 63
console.log(computeLCM(12, 18)); // Expected: 36
console.log(computeLCM(5, 7)); // Expected: 35
console.log(computeLCM(1, 10)); // Expected: 10
console.log(computeLCM(8, 12)); // Expected: 24
