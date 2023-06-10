function lcm(num1, num2) {
  //   a * b = gcd * lcm
  //  lcm = (a * b) / gcd

  return (num1 * num2) / gcd(num1, num2);
}

function gcd(num1, num2) {
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }

  return num1;
}

describe("lcm", () => {
  test("lcm(4, 6)", () => {
    expect(lcm(4, 6)).toBe(12);
  });

  test("lcm(12, 15)", () => {
    expect(lcm(12, 15)).toBe(60);
  });

  test("lcm(2, 8)", () => {
    expect(lcm(2, 8)).toBe(8);
  });

  test("lcm(3, 7)", () => {
    expect(lcm(3, 7)).toBe(21);
  });
});
