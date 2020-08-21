import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Editor from "./editor";

afterEach(cleanup);

describe("editor component", () => {
  const handleSubmit = jest.fn();
  const draftData = {
    title: "",
    body: "",
    description: ""
  };

  it("should set new title, body, description", () => {
    const { asFragment, getByTestId } = myRender(
      <Editor handleSubmit={handleSubmit} draftData={draftData} />
    );
    const titleInput = getByTestId("title-input");
    const bodyInput = getByTestId("body-input");
    const descriptionInput = getByTestId("description-input");

    fireEvent.change(titleInput, { target: { value: "title" } });
    fireEvent.change(bodyInput, { target: { value: "body" } });
    fireEvent.change(descriptionInput, { target: { value: "description" } });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should show a preview", () => {
    const { asFragment, getByTestId } = myRender(
      <Editor handleSubmit={handleSubmit} draftData={draftData} />
    );
    const showButton = getByTestId("show");

    fireEvent.click(showButton);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the shapshot", () => {
    const { asFragment } = myRender(
      <Editor handleSubmit={handleSubmit} draftData={draftData} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
