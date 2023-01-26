import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitIndex from "./OutfitIndex";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

describe("<OutfitIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<BrowserRouter>
    
    <OutfitIndex outfits={mockOutfits} /> 
    </BrowserRouter>);

    expect(screen.getAllByText("Style: Date Night").length).toEqual(2);
    expect(screen.getAllByText("Gender: male").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(6);
  });
});
