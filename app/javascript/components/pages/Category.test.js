import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Category from "./Category";

describe("<Category />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Category />
      </BrowserRouter>,
      div
    );
    expect(screen.getByText("Categories")).toBeInTheDocument()
  });
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Category />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Office Attire"));
    expect(screen.getByText("Office Attire")).toBeInTheDocument();
    userEvent.click(screen.getByText("Casual"));
    expect(screen.getByText("Casual")).toBeInTheDocument();
    userEvent.click(screen.getByText("Formal"));
    expect(screen.getByText("Formal")).toBeInTheDocument();
    userEvent.click(screen.getByText("Date Night"));
    expect(screen.getByText("Date Night")).toBeInTheDocument();
    userEvent.click(screen.getByText("All Outfits"));
    expect(screen.getByText("All Outfits")).toBeInTheDocument();
  });
});
