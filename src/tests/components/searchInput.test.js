import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "../../components/SearchInput";
import { SearchProvider } from "../../store/SearchContext";

describe("SearchInput", () => {
  it("renders SearchInput", () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText("Search Here...")).toBeInTheDocument();
  });

  it("search results popup appear when user focus on search field with message", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText("Search Here...");
    fireEvent.focus(input);
    expect(
      screen.getByText("Search results will appear here")
    ).toBeInTheDocument();
  });

  it("Displays search results", () => {
    render(
      <SearchProvider>
        <SearchInput />
        {"Test"}
      </SearchProvider>
    );
    const input = screen.getByPlaceholderText("Search Here...");
    fireEvent.change(input, { target: { value: "Test" } });
    const searchResultsPopup = screen.getByText("Test");
    expect(searchResultsPopup).toBeInTheDocument();
  });

  it("Displays Not found message", () => {
    render(
      <SearchProvider>
        <SearchInput />
        {"Test"}
      </SearchProvider>
    );
    const input = screen.getByPlaceholderText("Search Here...");
    fireEvent.change(input, { target: { value: "sss" } });
    const searchResultsPopupCase2 = screen.getByText(
      "Not found any try another thing"
    );
    expect(searchResultsPopupCase2).toBeInTheDocument();
  });
});
