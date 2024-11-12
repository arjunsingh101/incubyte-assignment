/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import StringCalculator from "./stringCaculator";

describe("StringCalculator Component", () => {
  beforeEach(() => {
    render(<StringCalculator />);
  });

  test("displays the correct result when calculating valid input", () => {
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");
    const expectedOutput = "Result: 3";

    fireEvent.change(input, { target: { value: "1,2" } });
    fireEvent.click(button);
    expect(screen.getByText(expectedOutput)).toBeInTheDocument();
  });

  test("displays an error message for negative numbers", () => {
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");
    const expectedError = "Negative numbers not allowed: -2";

    fireEvent.change(input, { target: { value: "1,-2,3" } });
    fireEvent.click(button);

    expect(screen.getByText(expectedError)).toBeInTheDocument();
  });

  test("displays zero when input is empty", () => {
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");
    const expectedOutput = "Result: 0";

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);
    expect(screen.getByText(expectedOutput)).toBeInTheDocument();
  });
});
