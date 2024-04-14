import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("renders learn react link", () => {
  test("initially displays a count of 0", () => {
    render(<App />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("0");
  });

  test("increments count by 1 when the button is clicked", () => {
    render(<App />);
    const counterButton = screen.getByTestId("counter-button");
    fireEvent.click(counterButton);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("1");
  });
});
