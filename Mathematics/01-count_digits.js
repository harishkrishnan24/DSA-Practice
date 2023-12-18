function countDigits(num) {
  let result = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    result++;
  }

  return result;
}

console.log(countDigits(9235)); // 4
console.log(countDigits(38)); // 2
console.log(countDigits(7)); // 1

// Time - O(d)
// Space - O(1)
