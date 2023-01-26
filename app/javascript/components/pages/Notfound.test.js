import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(
      screen.getByText("The Outfits you seek are lost in the clothes pile.")
    ).toBeInTheDocument();
  });
});
