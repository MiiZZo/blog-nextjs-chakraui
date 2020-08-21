import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import ArticlePage from "./article";

afterEach(cleanup);

describe("article page", () => {
  it("should call the router back function", () => {
    const routerBack = jest.fn();
    const { getByTestId } = myRender(
      <ArticlePage
        article={{
          id: 1,
          title: "",
          description: "",
          body: "",
          comments: [],
          created: "",
          handleSubmitComment: () => {}
        }}
      />,
      { back: routerBack }
    );
    const backButton = getByTestId("back");

    fireEvent.click(backButton);

    expect(routerBack).toBeCalled();
  });

  it("should show error 404", () => {
    const { asFragment } = myRender(<ArticlePage article={null} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the shapshot", () => {
    const { asFragment } = myRender(
      <ArticlePage
        article={{
          id: 1,
          title: "",
          description: "",
          body: "",
          comments: [],
          created: "",
          handleSubmitComment: () => {}
        }}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
