import Autocomplete from "./Autocomplete";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("<Autocomplete />", () => {
  it("Should render a input", () => {
    renderComponent();

    expect(screen.getByTestId("autocomplete-input")).toBeInTheDocument();
  });

  it("autocomplete modal should not be visible before click", () => {
    renderComponent();

    const autocompleteModal = screen.queryByTestId("autocomplete-modal");

    expect(autocompleteModal).not.toBeInTheDocument();
  });

  it("Should render autocomplete functionality", async () => {
    renderComponent();

    await act(async () => {
      const input = screen.getByTestId("autocomplete-input");
      fireEvent.click(input);
    });

    // Click input
    screen.getByTestId("autocomplete-input").click();

    // Wait for autocomplete component to open
    const autocompleteModal = screen.queryByTestId("autocomplete-modal");

    // Options should be visible
    expect(autocompleteModal).toBeInTheDocument();
    expect(autocompleteModal).toBeVisible();
  });
});

function renderComponent() {
  return render(<Autocomplete />);
}
