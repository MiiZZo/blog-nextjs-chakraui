import React from "react";
import Blockquote from "./blockquote";
import { myRender } from "@lib/testing/render";

describe("blockquote component", () => {
  it("should match a shapshopt", () => {
    const { asFragment } = myRender(<Blockquote>My blockquote</Blockquote>);

    expect(asFragment).toMatchSnapshot();
  });
});
