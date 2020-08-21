import { formatDate } from "./formatting";

describe("formatting function", () => {
  it("return value should equal to `06-08-2020`", () => {
    const result = formatDate("2020-08-06 23:55:06");

    expect(result).toBe("06-08-2020");
  });
});
