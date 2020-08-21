import React from "react";
import { cleanup } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Draft from "./draft";

afterEach(cleanup);

describe("draft component", () => {
  const handleChangeDraftData = jest.fn();
  const handleSubmit = jest.fn();
  const handleToggleShowPreview = jest.fn();

  it("should match a shapshot", () => {
    const { asFragment } = myRender(
      <Draft
        draftData={{
          title: "title",
          body: "body",
          description: "description"
        }}
        handleChangeDraftData={handleChangeDraftData}
        handleSubmit={handleSubmit}
        handleToggleShowPreview={handleToggleShowPreview}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
