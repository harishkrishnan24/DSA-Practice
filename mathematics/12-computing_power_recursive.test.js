function computePower(num, power) {
  if (power === 0) return 1;

  let temp = computePower(num, Math.floor(power / 2));
  temp = temp * temp;

  if (power % 2 === 0) {
    return temp;
  } else {
    return temp * num;
  }
}

describe("computePower", () => {
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
