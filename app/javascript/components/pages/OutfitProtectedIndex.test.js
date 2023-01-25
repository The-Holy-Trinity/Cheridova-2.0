import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitProtectedIndex from "./OutfitProtectedIndex";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";

describe("<OufitProtectedIndex />", () => {
  it("renders without crashing", () => {
   
    render(<BrowserRouter>
    <OutfitProtectedIndex outfits={mockOutfits} current_user={{id:1}}/>
    </BrowserRouter>);

    expect(screen.getByText("My Fashionable Tastes")).toBeInTheDocument();
    expect(screen.getByText("Name: DateNight1")).toBeInTheDocument();
    expect(screen.getByText("Style: Date Night")).toBeInTheDocument();
    expect(screen.getByText("Gender: male")).toBeInTheDocument();
  });
});