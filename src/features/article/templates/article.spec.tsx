import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Article from "./article";

afterEach(cleanup);

describe("article teamplate", () => {
  const handleSubmitComment = jest.fn();
  const articleProps = {
    id: 1,
    title: "My title",
    description: "my description",
    body: "My body",
    comments: [{ body: "my body" }],
    created: "2020-08-06 23:55:06",
    handleSubmitComment: handleSubmitComment
  };

  it("should show the create comment component", () => {
    const { asFragment, getByTestId } = myRender(<Article {...articleProps} />);
    const showButton = getByTestId("show");

    fireEvent.click(showButton);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match a shapshot", () => {
    const { asFragment } = myRender(<Article {...articleProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
