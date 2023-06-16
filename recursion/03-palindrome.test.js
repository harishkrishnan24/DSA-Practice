function isPalindrome(string, start, end) {
  if (start >= end) return true;

  return (
    string[start] === string[end] && isPalindrome(string, start + 1, end - 1)
  );
}

describe("isPalindrome", () => {
  test("isPalindrome('abbcbba', 0 , 6)", () => {
    expect(isPalindrome("abbcbba", 0, 6)).toEqual(true);
  });

  test("isPalindrome('abba', 0, 3)", () => {
    expect(isPalindrome("abba", 0, 3)).toEqual(true);
  });

  test("isPalindrome('geeks', 0, 4)", () => {
    expect(isPalindrome("geeks", 0, 4)).toEqual(false);
  });
});
