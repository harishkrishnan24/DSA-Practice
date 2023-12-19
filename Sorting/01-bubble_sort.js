function bubbleSort(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) return arr;
    swapped = false;
  }

  return arr;
}

console.log(bubbleSort([3, 2, 6, 10, 4])); // [2, 3, 4, 6, 10]

// Time - O(n^2)
// Space - O(1)
