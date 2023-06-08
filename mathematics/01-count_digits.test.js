// Time - O(d) Space - O(1)

function countDigits(num) {
  let numDigits = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    numDigits++;
  }

  return numDigits;
}

describe("countDigits", () => {
  test("countDigits(100)", () => {
    expect(countDigits(100)).toBe(3);
  });

  test("countDigits(1)", () => {
    expect(countDigits(100)).toBe(3);
  });

  test("countDigits(999)", () => {
    expect(countDigits(100)).toBe(3);
  });
});
