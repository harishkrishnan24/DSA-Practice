function binarySearchIterative(arr, el) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] > el) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearchIterative([10, 20, 30, 40, 50, 60], 20)); // 1
console.log(binarySearchIterative([5, 15, 25], 25)); // 2
console.log(binarySearchIterative([5, 10, 15, 25, 35], 20)); // -1
console.log(binarySearchIterative([10, 15], 20)); // -1
console.log(binarySearchIterative([10, 15], 5)); // -1
console.log(binarySearchIterative([10, 10], 10)); // 0 or 1

// Time - O(n)
// Space - O(1)
