import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitDate from "./OutfitDate";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";

describe("<OutfitDate />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <OutfitDate outfits={mockOutfits} />
      </BrowserRouter>
    );

    expect(screen.getAllByText("Style: Date Night").length).toEqual(2);
    expect(screen.getAllByText("Gender: male").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(2);
  });
});
