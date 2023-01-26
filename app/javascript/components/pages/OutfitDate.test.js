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
    const imgs = screen.getAllByRole("img");
    const img1 = imgs[0];
    const img2 = imgs[1];
    const img1src = img1.getAttribute("src");
    const img2src = img2.getAttribute("src");
    const img1alt = img1.getAttribute("alt");
    const img2alt = img2.getAttribute("alt");
    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
    expect(img1src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/21-08-18_Set_B_M_SIT_v3_1x1-scaled.jpeg"
    );
    expect(img2src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/21-08-18_Set_B_M_SIT_v2_1x1-scaled.jpeg"
    );
    expect(img1alt).toEqual("profile of outfits DateNight1");
    expect(img2alt).toEqual("profile of outfits DateNight2");
    expect(screen.getAllByText("Style: Date Night").length).toEqual(2);
    expect(screen.getAllByText("Gender: male").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(2);
  });
});
