function snakePattern(mulArr) {
  for (let row = 0; row < mulArr.length; row++) {
    if (row % 2 === 0) {
      for (let col = 0; col < mulArr[row].length; col++) {
        console.log(mulArr[row][col]);
      }
    } else {
      for (let col = mulArr[row].length - 1; col >= 0; col--) {
        console.log(mulArr[row][col]);
      }
    }
  }
}

console.log(
  snakePattern([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
); // 1 2 3 4 8 7 6 5 9 10 11 12 16 15 14 13

// Time - O(R * C)
// Space - O(1)
