import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitShow from "./OutfitShow";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import mockOutfits from "./mockOutfits";

const renderComponent = (props, route) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/OutfitsShow/:id" element={<OutfitShow {...props} />}>
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("<OutfitShow />", () => {
  it("renders without crashing", () => {
   renderComponent({outfits:mockOutfits}, "/OutfitsShow/1")
    expect(screen.getByText("Date Night")).toBeInTheDocument();
    expect(screen.getByText("Gender: male")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Top: Tan Ribbed Button Collared Shirt with Blue Quilt Jacket"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Bottom: Olive Grean Jeans")).toBeInTheDocument();
    expect(
      screen.getByText("Shoes: Black Boots With Tan Sole")
    ).toBeInTheDocument();
    expect(screen.getByText("Accessories: None")).toBeInTheDocument();
    expect(screen.getByText("Back to outfits")).toBeInTheDocument();
  });
  it("shows notfound when parameter doesn't match", ()=>{
    renderComponent({outfits:mockOutfits}, "/OutfitsShow/3")
    expect(screen.getByText("Outfit not located")).toBeInTheDocument()
  }) 
});
