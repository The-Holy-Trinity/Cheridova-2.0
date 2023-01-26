import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitCasual from "./OutfitCasual";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";

describe("<OutfitCasual />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <OutfitCasual outfits={mockOutfits} />
      </BrowserRouter>
    );

    expect(screen.getAllByText("Style: Casual").length).toEqual(2);
    expect(screen.getAllByText("Gender: Male").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(2);
  });
});