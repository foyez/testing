const { fizzBuzz } = require("./fizz-buzz");

describe("fizzBuzz", () => {
  it("should throw an exception if input is not a number", () => {
    expect(() => {
      fizzBuzz("9");
    }).toThrow();
    expect(() => {
      fizzBuzz(null);
    }).toThrow();
    expect(() => {
      fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      fizzBuzz({});
    }).toThrow();
  });

  it("should return FizzBuzz if input is divisible by 3 & 5", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if input is divisible by 3", () => {
    const result = fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if input is divisible by 5", () => {
    const result = fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return input number if input is not divisible by 3 or 5", () => {
    const result = fizzBuzz(2);
    expect(result).toBe(2);
  });
});
