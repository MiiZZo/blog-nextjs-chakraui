import React from "react";
import { cleanup } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import CommonPage from "./common-page";

afterEach(cleanup);

describe("common page component", () => {
  it("should match a shapshot", () => {
    const { asFragment } = myRender(
      <CommonPage footer={<div>footer</div>}>
        <div>children</div>
      </CommonPage>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
