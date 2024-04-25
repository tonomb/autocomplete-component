import Autocomplete from "./Autocomplete";
import { fireEvent, render, screen, act } from "@testing-library/react";

describe("<Autocomplete />", () => {
  const testOptions = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5",
  ];

  it("Should render a input", () => {
    renderComponent(testOptions);

    expect(screen.getByTestId("autocomplete-input")).toBeInTheDocument();
  });

  it("autocomplete modal should not be visible before click", () => {
    renderComponent(testOptions);

    const autocompleteModal = screen.queryByTestId("autocomplete-modal");

    expect(autocompleteModal).not.toBeInTheDocument();
  });

  it("Should render autocomplete functionality", async () => {
    renderComponent(testOptions);

    // Click input
    await act(() => {
      const input = screen.getByTestId("autocomplete-input");
      fireEvent.click(input);
    });

    // Wait for autocomplete component to open
    const autocompleteModal = screen.queryByTestId("autocomplete-modal");

    // Options should be visible
    expect(autocompleteModal).toBeInTheDocument();
    expect(autocompleteModal).toBeVisible();
  });

  it("should display the options passed in", async () => {
    renderComponent(testOptions);

    await act(() => {
      const input = screen.getByTestId("autocomplete-input");
      fireEvent.click(input);
    });

    testOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
});

function renderComponent(options: any) {
  return render(<Autocomplete options={options} />);
}
