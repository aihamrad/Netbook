import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button", () => {
  it("renders a button element with the given className", () => {
    const className = "custom-class text-class";
    render(<Button className={className}>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(className);
  });
});
