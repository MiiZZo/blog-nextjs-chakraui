import React from "react";
import { myRender } from "@lib/testing/render";
import { cleanup, fireEvent } from "@testing-library/react";
import CreateComment from "./create-comment";

afterEach(cleanup);

describe("create comment component", () => {
  const handleDiscardComment = jest.fn();
  const handleSubmitComment = jest.fn();

  it("should call the handleDiscardComment function when modal open", () => {
    const handleDiscardComment = jest.fn();
    const { getByTestId } = myRender(
      <CreateComment
        handleDiscardComment={handleDiscardComment}
        handleSubmitComment={handleSubmitComment}
      />
    );
    const closeButton = getByTestId("close");
    const input = getByTestId("textarea");

    fireEvent.change(input, { target: { value: "my value" } });
    fireEvent.click(closeButton);

    const discardButton = getByTestId("discard");

    fireEvent.click(discardButton);

    expect(handleDiscardComment).toBeCalled();
  });

  it("should call the handleSubmitComment function", () => {
    const handleSubmitComment = jest.fn();
    const { getByTestId } = myRender(
      <CreateComment
        handleSubmitComment={handleSubmitComment}
        handleDiscardComment={handleDiscardComment}
      />
    );
    const submitButton = getByTestId("submit");

    fireEvent.click(submitButton);

    expect(handleSubmitComment).toBeCalledTimes(1);
  });

  it("should call the handleDiscardComment function", () => {
    const handleDiscardComment = jest.fn();
    const { getByTestId } = myRender(
      <CreateComment
        handleSubmitComment={handleSubmitComment}
        handleDiscardComment={handleDiscardComment}
      />
    );
    const closeButton = getByTestId("close");

    fireEvent.click(closeButton);

    expect(handleDiscardComment).toBeCalledTimes(1);
  });

  it("should open modal", () => {
    const handleDiscardComment = jest.fn();
    const value = "my value";
    const { asFragment, getByTestId } = myRender(
      <CreateComment
        handleSubmitComment={handleSubmitComment}
        handleDiscardComment={handleDiscardComment}
      />
    );
    const input = getByTestId("textarea");
    const discardButton = getByTestId("close");

    fireEvent.change(input, { target: { value } });
    fireEvent.click(discardButton);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match a shapshot", () => {
    const { asFragment } = myRender(
      <CreateComment
        handleSubmitComment={handleSubmitComment}
        handleDiscardComment={handleDiscardComment}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
