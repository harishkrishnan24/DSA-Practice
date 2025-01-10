function trailingZeroes(num) {
  let result = 0;

  for (let i = 5; i <= num; i = i * 5) {
    result += Math.floor(num / i);
  }

  return result;
}

console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(10)); // 2
console.log(trailingZeroes(100)); // 24
