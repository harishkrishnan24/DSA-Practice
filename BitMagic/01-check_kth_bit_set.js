function checkKthBitSet(num, bit) {
  return !!(num & (1 << (bit - 1)));
}

console.log(checkKthBitSet(5, 1)); // true
console.log(checkKthBitSet(8, 2)); // false
console.log(checkKthBitSet(0, 3)); // false

// Time - O(1)
// Space - O(1)
