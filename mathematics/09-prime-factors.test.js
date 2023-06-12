function primeFactors(num) {
  const pfs = [];

  while (num % 2 == 0) {
    pfs.push(2);
    num = num / 2;
  }

  while (num % 3 == 0) {
    pfs.push(3);
    num = num / 3;
  }

  for (let i = 5; i * i < num; i + 6) {
    while (num % i == 0) {
      pfs.push(i);
      num = num / i;
    }

    while (num % (i + 2) == 0) {
      pfs.push(i + 2);
      num = num / (i + 2);
    }
  }

  if (num > 3) {
    pfs.push(num);
  }

  return pfs;
}

describe("primeFactors", () => {
  test("primeFactors(12)", () => {
    expect(primeFactors(12)).toEqual([2, 2, 3]);
  });

  test("primeFactors(13)", () => {
    expect(primeFactors(13)).toEqual([13]);
  });

  test("primeFactors(315)", () => {
    expect(primeFactors(315)).toEqual([3, 3, 5, 7]);
  });
});
