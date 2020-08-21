import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import InputWithMaxLength from "./input-with-max-length";

afterEach(cleanup);

describe("testing a input with max length", () => {
  const maxLength = 5;

  it("should be rendered with value equal to `my value`", () => {
    const value = "my value";
    const { getByTestId } = myRender(
      <InputWithMaxLength maxLength={maxLength} value={value} />
    );

    const input = getByTestId("input") as HTMLInputElement;

    expect(input.value).toBe(value);
  });

  it("should be rendered with textarea instead input", () => {
    const { getByTestId } = myRender(
      <InputWithMaxLength maxLength={maxLength} input="textarea" />
    );

    const textarea = getByTestId("textarea") as HTMLTextAreaElement;

    expect(textarea).toBeDefined();
  });

  it("text indicator should be defined", () => {
    const { getByTestId } = myRender(
      <InputWithMaxLength maxLength={maxLength} />
    );
    const indicator = getByTestId("circular-indicator");

    expect(indicator).toBeDefined();
  });

  it("circural indicator should be defined", () => {
    const value = "a".repeat(maxLength + 1);

    const { getByTestId } = myRender(
      <InputWithMaxLength maxLength={maxLength} value={value} />
    );

    const indicator = getByTestId("text-indicator");

    expect(indicator).toBeDefined();
  });

  it("should be call onChange function", () => {
    const onChange = jest.fn();

    const { getByTestId } = myRender(
      <InputWithMaxLength maxLength={maxLength} onChange={onChange} />
    );
    const input = getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "my value" } });

    expect(onChange).toBeCalledTimes(1);
  });
});
