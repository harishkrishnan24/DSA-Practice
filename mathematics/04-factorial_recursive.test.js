// Time - O(n) Space - O(n)

function factorial(num) {
  if (num === 0) return 1;

  return num * factorial(num - 1);
}

describe("factorial", () => {
  test("factorial(4)", () => {
    expect(factorial(4)).toBe(24);
  });

  test("factorial(6)", () => {
    expect(factorial(6)).toBe(720);
  });

  test("factorial(0)", () => {
    expect(factorial(0)).toBe(1);
  });
});
