import React from "react";
import { withRouter } from "next/router";
import { cleanup } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import { Footer } from "@ui";

afterEach(cleanup);

describe("footer component", () => {
  it("should be match a shapshot", () => {
    const { asFragment } = myRender(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
