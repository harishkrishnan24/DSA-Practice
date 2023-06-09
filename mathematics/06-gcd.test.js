function gcd(num1, num2) {
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }

  return num1;
}

describe("gcd", () => {
  test("gcd(4, 6)", () => {
    expect(gcd(4, 6)).toBe(2);
  });

  test("gcd(100, 200)", () => {
    expect(gcd(100, 200)).toBe(100);
  });

  test("gcd(200, 100)", () => {
    expect(gcd(200, 100)).toBe(100);
  });

  test("gcd(7, 13)", () => {
    expect(gcd(7, 13)).toBe(1);
  });
});
