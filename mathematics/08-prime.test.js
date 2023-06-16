function isPrime(num) {
  if (num == 1) return false;

  if (num == 2 || num == 3) return true; // 1 2 3 4 5 6 7

  if (num % 2 == 0 || num % 3 == 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}

describe("isPrime", () => {
  test("isPrime(13)", () => {
    expect(isPrime(13)).toBe(true);
  });

  test("isPrime(14)", () => {
    expect(isPrime(14)).toBe(false);
  });

  test("isPrime(101)", () => {
    expect(isPrime(101)).toBe(true);
  });
});
