import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitOffice from "./OutfitOffice";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";


describe("<OutfitOffice />", () => {
  it("renders without crashing", () => {
    render(<BrowserRouter>

    <OutfitOffice outfits={mockOutfits} /> 
    </BrowserRouter>);

    expect(screen.getAllByText("Style: Office Attire").length).toEqual(2);
    expect(screen.getAllByText("Gender: Male").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(2);
  });
});