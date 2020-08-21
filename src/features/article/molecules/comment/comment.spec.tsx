import { cleanup } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Comment from "./comment";

afterEach(cleanup);

describe("comment component", () => {
  it("should match a shapshot", () => {
    const body = "Test comment";
    const { asFragment } = myRender(<Comment body={body} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
