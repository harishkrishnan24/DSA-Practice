function celciusToFarenheit(celcius) {
  return Math.floor(celcius * 1.8 + 32);
}

describe("celciusToFarenheit", () => {
  it("celciusToFarenheit(32)", () => {
    expect(celciusToFarenheit(32)).toEqual(89);
  });

  it("celciusToFarenheit(50)", () => {
    expect(celciusToFarenheit(50)).toEqual(122);
  });
});
