import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Page404 from "./404";

afterEach(cleanup);

describe("404 page", () => {
  it("should call the router back function", () => {
    const routerBack = jest.fn();

    const { getByTestId } = myRender(<Page404 />, { back: routerBack });
    const backButton = getByTestId("back");

    fireEvent.click(backButton);

    expect(routerBack).toBeCalled();
  });

  it("should match the component", () => {
    const { asFragment } = myRender(<Page404 />);

    expect(asFragment()).toMatchSnapshot();
  });
});
