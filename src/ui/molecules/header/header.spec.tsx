import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Header from "./header";

afterEach(cleanup);

describe("header component", () => {
  const handleLogout = jest.fn();

  it("should call the handleLogout function", () => {
    const { getByTestId } = myRender(
      <Header userIsAuth={true} handleLogout={handleLogout} isLoading={false} />
    );
    const logoutButton = getByTestId("logout");

    fireEvent.click(logoutButton);

    expect(handleLogout).toBeCalledTimes(1);
  });

  it("should show auth links", () => {
    const { asFragment } = myRender(
      <Header
        userIsAuth={false}
        handleLogout={handleLogout}
        isLoading={false}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should show user links", () => {
    const { asFragment } = myRender(
      <Header userIsAuth={true} handleLogout={handleLogout} isLoading={false} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should show the spinner", () => {
    const { asFragment } = myRender(
      <Header userIsAuth={false} handleLogout={handleLogout} isLoading={true} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match a shapshot", () => {
    const { asFragment } = myRender(
      <Header
        userIsAuth={false}
        handleLogout={handleLogout}
        isLoading={false}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
