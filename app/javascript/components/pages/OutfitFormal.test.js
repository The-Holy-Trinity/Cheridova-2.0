import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitFormal from "./OutfitFormal";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";


describe("<OutfitFormal />", () => {
  it("renders without crashing", () => {
    render(<BrowserRouter>

    <OutfitFormal outfits={mockOutfits} /> 
    </BrowserRouter>);

    expect(screen.getAllByText("Style: Formal").length).toEqual(2);
    expect(screen.getAllByText("Gender: female").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(2);
  });
});