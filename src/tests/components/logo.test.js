import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "../../components/Logo";

describe("Logo", () => {
  it("renders the logo image and text with the given color", () => {
    const color = "blue";
    render(<Logo color={color} />);
    const logoImage = screen.getByAltText("logo");
    const logoText = screen.getByTestId("netbook");
    expect(logoImage).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
    expect(logoText).toHaveClass(`text-${color}`);
  });
});
