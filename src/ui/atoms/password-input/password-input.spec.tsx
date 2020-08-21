import { cleanup, fireEvent } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import PasswordInput from "./password-input";

afterEach(cleanup);

describe("testing password input", () => {
  it("An input should be rendered with a type equal to 'password'", () => {
    const { getByTestId } = myRender(<PasswordInput />);
    const input = getByTestId("input") as HTMLInputElement;

    expect(input.type).toBe("password");
  });
  it("should be change input type from password to text after click on button", () => {
    const { getByTestId } = myRender(<PasswordInput />);
    const input = getByTestId("input") as HTMLInputElement;
    const button = getByTestId("button") as HTMLButtonElement;

    fireEvent.click(button);

    expect(input.type).toBe("text");
  });
});
