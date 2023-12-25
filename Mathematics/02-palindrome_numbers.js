function isPalindrome(num) {
  let temp = num;
  let rev = 0;

  while (temp !== 0) {
    const ld = temp % 10;
    rev = rev * 10 + ld;
    temp = Math.floor(temp / 10);
  }

  return rev === num;
}

console.log(isPalindrome(78987)); // true
console.log(isPalindrome(8668)); // true
console.log(isPalindrome(8)); // true
console.log(isPalindrome(21)); // false
console.log(isPalindrome(367)); // false
