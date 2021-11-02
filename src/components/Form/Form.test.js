import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/test-utils";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should display two inputs and a button", () => {
      renderWithProviders(<Form />);

      const firstinput = screen.getByLabelText("Title");
      const secondinput = screen.getByLabelText("Description");
      const button = screen.getByRole("button");

      expect(firstinput).toBeInTheDocument();
      expect(secondinput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});

describe("When the user types in the name input", () => {
  test("Then it should render a name input with the typed text inside", () => {
    renderWithProviders(<Form />);
    const typedWord = "santni";

    const titleInput = screen.getByLabelText("Title");
    userEvent.type(titleInput, typedWord);

    expect(titleInput).toHaveValue(typedWord);
  });
});
