function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("ABCDCBA")); // true
console.log(isPalindrome("ABBA")); // true
console.log(isPalindrome("geeks")); // false

// Time - O(n)
// Space - O(1)
