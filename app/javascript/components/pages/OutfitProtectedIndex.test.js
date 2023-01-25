import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitProtectedIndex from "./OutfitProtectedIndex";

describe("<OufitProtectedIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<OutfitProtectedIndex />, div);
    expect(screen.getByText("My Fashionable Tastes")).toBeInTheDocument();
  });
});