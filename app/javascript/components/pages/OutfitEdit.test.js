import React from "react"
import { render, screen } from "@testing-library/react"
import OutfitEdit from "./OutfitEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockOutfits from "./mockOutfits"

describe("<OutfitEdit />", () => {
  beforeEach(() => {
    render(
        <MemoryRouter initialEntries={["/OutfitEdit/1"]}>
          <Routes>
            <Route path="OutfitEdit/:id" element={<OutfitEdit outfits={mockOutfits} logged_in={true} />} />
          </Routes>
        </MemoryRouter>,
    )
})
it("renders without crashing", () => {
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Top")).toBeInTheDocument();
    expect(screen.getByText("Bottom")).toBeInTheDocument();
    expect(screen.getByText("Shoes")).toBeInTheDocument();
    expect(screen.getByText("Accessories")).toBeInTheDocument();
    expect(screen.getByText("Style")).toBeInTheDocument();
    expect(screen.getByText("Image")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Submit Outfit Changes!")).toBeInTheDocument();

})

})
