import React from "react"
import { render, screen } from "@testing-library/react"
import OutfitNew from "./OutfitNew"
import { BrowserRouter } from "react-router-dom"

describe("<OutfitNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <OutfitNew />
      </BrowserRouter>
      ,
      div)
     
  })
})