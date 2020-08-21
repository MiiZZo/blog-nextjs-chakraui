import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Pagination from "./pagination";

afterEach(cleanup);

describe("pagination component", () => {
  const defaultCurrent = 1;
  const total = 10;
  const onChange = jest.fn();

  it("numbered buttons should not be more than total", async () => {
    const current = 18;
    const total = 20;
    const { getAllByTestId } = myRender(
      <Pagination total={total} current={current} onChange={onChange} />
    );
    const paginateButtons = await getAllByTestId("paginate-button");
    const paginateButtonsCount = paginateButtons.length;

    expect(paginateButtons[paginateButtonsCount - 1].textContent).toBe(
      total.toString()
    );
  });

  it("onChange function should be called 3 times", async () => {
    const onChange = jest.fn();
    const current = 10;
    const total = 20;
    const { getByTestId, getAllByTestId } = myRender(
      <Pagination current={current} total={total} onChange={onChange} />
    );

    const firstPaginateButton = getByTestId("first-paginate-button");
    const lastPaginateButton = getByTestId("last-paginate-button");
    const paginateButton = await getAllByTestId("paginate-button")[0];

    fireEvent.click(firstPaginateButton);
    fireEvent.click(lastPaginateButton);
    fireEvent.click(paginateButton);

    expect(onChange).toBeCalledTimes(3);
  });

  it("last paginate button should not be disabled", () => {
    const { getByTestId } = myRender(
      <Pagination current={defaultCurrent} total={total} onChange={onChange} />
    );
    const lastPaginateButton = getByTestId("last-paginate-button");

    expect(lastPaginateButton).not.toBeDisabled();
  });

  it("first paginate button should be disabled", async () => {
    const { getByTestId } = myRender(
      <Pagination current={defaultCurrent} total={total} onChange={onChange} />
    );
    const firstPaginateButton = getByTestId("first-paginate-button");

    expect(firstPaginateButton).toBeDisabled();
  });

  it("should contains five paginate button", async () => {
    const { findAllByTestId } = myRender(
      <Pagination current={defaultCurrent} total={total} onChange={onChange} />
    );

    const elementsContainer = await findAllByTestId("paginate-button");

    expect(elementsContainer.length).toBe(5);
  });

  it("should match a shapshot", () => {
    const { asFragment } = myRender(
      <Pagination current={defaultCurrent} total={total} onChange={onChange} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
