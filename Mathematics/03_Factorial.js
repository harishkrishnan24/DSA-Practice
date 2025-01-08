function factorial(num) {
  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
