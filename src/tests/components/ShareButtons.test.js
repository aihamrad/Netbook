import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShareLinks from "../../components/ShareLinks";

describe("ShareButtons", () => {
  it("displays 'Share' when not hovered", () => {
    render(<ShareLinks />);
    expect(screen.getByText("Share")).toBeInTheDocument();
  });

  it("displays social media buttons when hovered", () => {
    render(<ShareLinks />);
    fireEvent.mouseEnter(screen.getByTestId("share-buttons"));
    expect(screen.getByTestId("twitter")).toBeInTheDocument();
    expect(screen.getByTestId("facebook")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin")).toBeInTheDocument();
  });

  it("opens links in new tab when clicked", () => {
    render(<ShareLinks />);
    fireEvent.mouseEnter(screen.getByTestId("share-buttons"));
    const twitterLink = screen.getByTestId("twitter");
    const facebookLink = screen.getByTestId("facebook");
    const linkedInLink = screen.getByTestId("linkedin");
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(facebookLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("target", "_blank");
  });
});
