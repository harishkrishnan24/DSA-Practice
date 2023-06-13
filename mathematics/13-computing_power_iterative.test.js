function computePower(num, power) {
  let result = 1;

  while (power > 0) {
    if (power % 2 !== 0) {
      result *= num;
    }
    num *= num;
    power = Math.floor(power / 2);
  }

  return result;
}

describe("computePower - Iterative", () => {
  test("computePower(2, 3)", () => {
    expect(computePower(2, 3)).toBe(8);
  });

  test("computePower(3, 4)", () => {
    expect(computePower(3, 4)).toBe(81);
  });

  test("computePower(5, 0)", () => {
    expect(computePower(5, 0)).toBe(1);
  });
});
