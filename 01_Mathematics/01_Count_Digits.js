function countDigits(num) {
  let numOfDigits = 0;

  if (num === 0) {
    return 1;
  }

  while (num > 0) {
    num = Math.floor(num / 10);
    numOfDigits++;
  }

  return numOfDigits;
}

console.log(countDigits(7536)); // Expected: 4
console.log(countDigits(758)); // Expected: 3
console.log(countDigits(0)); // Expected: 1
console.log(countDigits(123456789)); // Expected: 9
console.log(countDigits(1)); // Expected: 1
