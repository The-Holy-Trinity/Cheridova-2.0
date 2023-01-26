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
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/05/20-11-16_Set_2_M_OLD_V6_1x1-592x592.jpeg"
    );
    expect(img2src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2022/07/21-05-12_Set_3_M_OLD_v8_1x1-592x592.jpeg"
    );
    expect(img1alt).toEqual("profile of outfits Casual1");
    expect(img2alt).toEqual("profile of outfits Casual2");
    expect(screen.getAllByText("Style: Casual").length).toEqual(2);
    expect(screen.getAllByText("Gender: Male").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(2);
  });
});
