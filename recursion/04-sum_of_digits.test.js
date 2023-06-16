function sumOfDigits(num) {
  if (num <= 9) return num;
  const lastDigit = num % 10;
  const otherDigits = Math.floor(num / 10);

  return sumOfDigits(otherDigits) + lastDigit;
}

describe("sumOfDigits", () => {
  test("sumOfDigits(253)", () => {
    expect(sumOfDigits(253)).toEqual(10);
  });

  test("sumOfDigits(9987)", () => {
    expect(sumOfDigits(9987)).toEqual(33);
  });

  test("sumOfDigits(10)", () => {
    expect(sumOfDigits(10)).toEqual(1);
  });
});
