function isPalindromeNumber(num) {
  let reversed = 0;
  let temp = num;

  while (temp > 0) {
    const lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }

  return reversed === num;
}

describe("isPalindromeNumber", () => {
  test("isPalindromeNumber(100)", () => {
    expect(isPalindromeNumber(100)).toBe(false);
  });

  test("isPalindromeNumber(111)", () => {
    expect(isPalindromeNumber(111)).toBe(true);
  });

  test("isPalindromeNumber(4334)", () => {
    expect(isPalindromeNumber(4334)).toBe(true);
  });

  test("isPalindromeNumber(4563)", () => {
    expect(isPalindromeNumber(4563)).toBe(false);
  });
});
