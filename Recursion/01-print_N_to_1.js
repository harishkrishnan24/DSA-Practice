function printNto1(n) {
  if (n === 0) return;

  console.log(n);

  printNto1(n - 1);
}

console.log(printNto1(5)); // 5 4 3 2 1
console.log(printNto1(2)); // 2 1

// Time - O(n)
// Space - O(n)
