function trailingZerofactorial(num) {
  let result = 0;

  for (let i = 5; i <= num; i = i * 5) {
    result = result + Math.floor(num / i);
  }

  return result;
}

describe("trailingZerofactorial", () => {
  test("trailingZerofactorial(4)", () => {
    expect(trailingZerofactorial(5)).toBe(1);
  });

  test("trailingZerofactorial(6)", () => {
    expect(trailingZerofactorial(10)).toBe(2);
  });

  test("trailingZerofactorial(0)", () => {
    expect(trailingZerofactorial(100)).toBe(24);
  });
});
