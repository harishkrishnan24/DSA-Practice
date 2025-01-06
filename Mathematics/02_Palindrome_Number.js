function isPalindrome(num) {
  let reversedNum = 0;
  let temp = num;

  while (temp !== 0) {
    const lastDigit = temp % 10;
    temp = Math.floor(temp / 10);
    reversedNum = reversedNum * 10 + lastDigit;
  }

  return reversedNum === num;
}

console.log(isPalindrome(363)); // true
console.log(isPalindrome(367)); // false
