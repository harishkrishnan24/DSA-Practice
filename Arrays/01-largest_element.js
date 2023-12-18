function largestElement(arr) {
  let resultIdx = 0;

  if (arr.length === 1) return resultIdx;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[resultIdx]) {
      resultIdx = i;
    }
  }

  return resultIdx;
}

console.log(largestElement([10, 5, 20, 8])); // 2
console.log(largestElement([40, 8, 50, 100])); // 3

// Time - O(n)
// Space - O(1)
