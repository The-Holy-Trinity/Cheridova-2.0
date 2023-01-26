import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitProtectedIndex from "./OutfitProtectedIndex";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";

describe("<OufitProtectedIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <OutfitProtectedIndex outfits={mockOutfits} current_user={{ id: 1 }} />
      </BrowserRouter>
    );
    const img1 = screen.getByRole("img");
    const img1src = img1.getAttribute("src");
    const img1alt = img1.getAttribute("alt");
    expect(img1).toBeInTheDocument();
    expect(img1src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/21-08-18_Set_B_M_SIT_v3_1x1-scaled.jpeg"
    );
    expect(img1alt).toEqual("profile of outfits DateNight1");
    expect(screen.getByText("My Fashionable Tastes")).toBeInTheDocument();
    expect(screen.getByText("Name: DateNight1")).toBeInTheDocument();
    expect(screen.getByText("Style: Date Night")).toBeInTheDocument();
    expect(screen.getByText("Gender: male")).toBeInTheDocument();
  });
});
