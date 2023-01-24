import React from "react";
import { render } from "@testing-library/react";
import OutfitIndex from "./OutfitIndex";

describe("<OutfitIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<OutfitIndex />, div);
  });
});
