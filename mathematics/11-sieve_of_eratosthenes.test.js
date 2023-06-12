function soe(num) {
  const primes = [];
  const isPrimes = new Array(num + 1).fill(true);

  for (let i = 2; i <= num; i++) {
    if (isPrimes[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        isPrimes[j] = false;
      }
    }
  }

  return primes;
}

describe("soe", () => {
  test("soe(10)", () => {
    expect(soe(10)).toEqual([2, 3, 5, 7]);
  });

  test("soe(23)", () => {
    expect(soe(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  });
});
