import { cleanup } from "@testing-library/react";
import { buildLinkToArticlePage } from "./builder";

afterEach(cleanup);

describe("builder func", () => {
  it("should return value equal to `/articles/1`", () => {
    const result = buildLinkToArticlePage(1);

    expect(result).toBe("/articles/1");
  });
});
