function factorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
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
