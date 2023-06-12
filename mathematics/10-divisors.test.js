function divisors(num) {
  const sortedDivisors = [];
  let i;

  for (i = 1; i * i < num; i++) {
    if (num % i === 0) sortedDivisors.push(i);
  }

  for (; i >= 1; i--) {
    if (num % i === 0) sortedDivisors.push(num / i);
  }

  return sortedDivisors;
}

describe("divisors", () => {
  test("divisors(15)", () => {
    expect(divisors(15)).toEqual([1, 3, 5, 15]);
  });

  test("divisors(100)", () => {
    expect(divisors(100)).toEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);
  });

  test("divisors(7)", () => {
    expect(divisors(7)).toEqual([1, 7]);
  });
});
