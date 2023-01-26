import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitFormal from "./OutfitFormal";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";

describe("<OutfitFormal />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <OutfitFormal outfits={mockOutfits} />
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
      "https://seezona.imgix.net/ed/15/ed159a569d8f42efbf3870e4ccb68cee_m.png?auto=format&fit=fill&q=90&bg=F7F7F7&ar=300%3A365&ixlib=react-9.5.2&w=1600"
    );
    expect(img2src).toEqual(
      "https://n.nordstrommedia.com/id/sr3/4baa3f72-f4b9-4ff1-a89c-b54b229b0dd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
    );
    expect(img1alt).toEqual("profile of outfits Formal1");
    expect(img2alt).toEqual("profile of outfits Formal2");
    expect(screen.getAllByText("Style: Formal").length).toEqual(2);
    expect(screen.getAllByText("Gender: female").length).toEqual(2);
    expect(screen.getAllByText("See More Details").length).toEqual(2);
  });
});
