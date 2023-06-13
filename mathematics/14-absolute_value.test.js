function absoluteValue(num) {
  return num < 0 ? -num : num;
}

describe("Absolute Value", () => {
  it("absoluteValue(-32)", () => {
    expect(absoluteValue(-32)).toEqual(32);
  });

  it("absoluteValue(45)", () => {
    expect(absoluteValue(45)).toEqual(45);
  });
});
