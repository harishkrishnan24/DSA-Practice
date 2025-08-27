function isPalindromeNumber(num) {
  if (num < 0) return false;

  if (num < 10) return true;

  let tempNum = num;
  let reversedNum = 0;

  while (tempNum > 0) {
    const lastDigit = tempNum % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    tempNum = Math.floor(tempNum / 10);
  }

  return reversedNum === num;
}

// Test case 1: Single digit numbers (should be palindromes)
console.log("isPalindromeNumber(0):", isPalindromeNumber(0)); // Expected: true
console.log("isPalindromeNumber(5):", isPalindromeNumber(5)); // Expected: true
console.log("isPalindromeNumber(9):", isPalindromeNumber(9)); // Expected: true

// Test case 2: Two digit palindromes
console.log("isPalindromeNumber(11):", isPalindromeNumber(11)); // Expected: true
console.log("isPalindromeNumber(22):", isPalindromeNumber(22)); // Expected: true
console.log("isPalindromeNumber(99):", isPalindromeNumber(99)); // Expected: true

// Test case 3: Two digit non-palindromes
console.log("isPalindromeNumber(10):", isPalindromeNumber(10)); // Expected: false
console.log("isPalindromeNumber(12):", isPalindromeNumber(12)); // Expected: false
console.log("isPalindromeNumber(98):", isPalindromeNumber(98)); // Expected: false

// Test case 4: Three digit palindromes
console.log("isPalindromeNumber(101):", isPalindromeNumber(101)); // Expected: true
console.log("isPalindromeNumber(121):", isPalindromeNumber(121)); // Expected: true
console.log("isPalindromeNumber(525):", isPalindromeNumber(525)); // Expected: true

// Test case 5: Three digit non-palindromes
console.log("isPalindromeNumber(100):", isPalindromeNumber(100)); // Expected: false
console.log("isPalindromeNumber(123):", isPalindromeNumber(123)); // Expected: false
console.log("isPalindromeNumber(987):", isPalindromeNumber(987)); // Expected: false

// Test case 6: Four digit palindromes
console.log("isPalindromeNumber(1001):", isPalindromeNumber(1001)); // Expected: true
console.log("isPalindromeNumber(1221):", isPalindromeNumber(1221)); // Expected: true
console.log("isPalindromeNumber(9999):", isPalindromeNumber(9999)); // Expected: true

// Test case 7: Four digit non-palindromes
console.log("isPalindromeNumber(1000):", isPalindromeNumber(1000)); // Expected: false
console.log("isPalindromeNumber(1234):", isPalindromeNumber(1234)); // Expected: false
console.log("isPalindromeNumber(9876):", isPalindromeNumber(9876)); // Expected: false

// Test case 8: Larger palindromes
console.log("isPalindromeNumber(12321):", isPalindromeNumber(12321)); // Expected: true
console.log("isPalindromeNumber(123454321):", isPalindromeNumber(123454321)); // Expected: true

// Test case 9: Larger non-palindromes
console.log("isPalindromeNumber(12345):", isPalindromeNumber(12345)); // Expected: false
console.log("isPalindromeNumber(123456789):", isPalindromeNumber(123456789)); // Expected: false

// Test case 10: Negative numbers (typically not palindromes due to minus sign)
console.log("isPalindromeNumber(-121):", isPalindromeNumber(-121)); // Expected: false
console.log("isPalindromeNumber(-1):", isPalindromeNumber(-1)); // Expected: false
