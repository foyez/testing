const { hello } = require("./hello");

describe("hello()", () => {
  it("should say hello to people", () => {
    expect(hello("Foyez")).toBe("Hello, Foyez");
  });
});
