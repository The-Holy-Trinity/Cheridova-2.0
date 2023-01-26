import React from "react";
import { render, screen } from "@testing-library/react";
import OutfitIndex from "./OutfitIndex";
import mockOutfits from "./mockOutfits";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

describe("<OutfitIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <OutfitIndex outfits={mockOutfits} />
      </BrowserRouter>
    );
    const imgs = screen.getAllByRole("img");
    const img1 = imgs[0];
    const img2 = imgs[1];
    const img3 = imgs[2];
    const img4 = imgs[3];
    const img5 = imgs[4];
    const img6 = imgs[5];
    const img7 = imgs[6];
    const img8 = imgs[7];
    const img1src = img1.getAttribute("src");
    const img2src = img2.getAttribute("src");
    const img3src = img3.getAttribute("src");
    const img4src = img4.getAttribute("src");
    const img5src = img5.getAttribute("src");
    const img6src = img6.getAttribute("src");
    const img7src = img7.getAttribute("src");
    const img8src = img8.getAttribute("src");
    const img1alt = img1.getAttribute("alt");
    const img2alt = img2.getAttribute("alt");
    const img3alt = img3.getAttribute("alt");
    const img4alt = img4.getAttribute("alt");
    const img5alt = img5.getAttribute("alt");
    const img6alt = img6.getAttribute("alt");
    const img7alt = img7.getAttribute("alt");
    const img8alt = img8.getAttribute("alt");
    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
    expect(img3).toBeInTheDocument();
    expect(img4).toBeInTheDocument();
    expect(img5).toBeInTheDocument();
    expect(img6).toBeInTheDocument();
    expect(img7).toBeInTheDocument();
    expect(img8).toBeInTheDocument();
    expect(img1src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/21-08-18_Set_B_M_SIT_v3_1x1-scaled.jpeg"
    );
    expect(img2src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/21-08-18_Set_B_M_SIT_v2_1x1-scaled.jpeg"
    );
    expect(img3src).toEqual(
      "https://seezona.imgix.net/ed/15/ed159a569d8f42efbf3870e4ccb68cee_m.png?auto=format&fit=fill&q=90&bg=F7F7F7&ar=300%3A365&ixlib=react-9.5.2&w=1600"
    );
    expect(img4src).toEqual(
      "https://n.nordstrommedia.com/id/sr3/4baa3f72-f4b9-4ff1-a89c-b54b229b0dd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
    );
    expect(img5src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/05/20-11-16_Set_2_M_OLD_V6_1x1-592x592.jpeg"
    );
    expect(img6src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2022/07/21-05-12_Set_3_M_OLD_v8_1x1-592x592.jpeg"
    );
    expect(img7src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/21-06-16_Set_B_M_SIT_RACK_v1_1x1-scaled.jpeg"
    );
    expect(img8src).toEqual(
      "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/21-06-16_Set_B_M_SIT_RACK_v4_1x1-scaled.jpeg"
    );
    expect(img1alt).toEqual("profile of outfits DateNight1");
    expect(img2alt).toEqual("profile of outfits DateNight2");
    expect(img3alt).toEqual("profile of outfits Formal1");
    expect(img4alt).toEqual("profile of outfits Formal2");
    expect(img5alt).toEqual("profile of outfits Casual1");
    expect(img6alt).toEqual("profile of outfits Casual2");
    expect(img7alt).toEqual("profile of outfits Office1");
    expect(img8alt).toEqual("profile of outfits Office2");
    expect(screen.getAllByText("Style: Date Night").length).toEqual(2);
    expect(screen.getAllByText("Style: Formal").length).toEqual(2);
    expect(screen.getAllByText("Style: Casual").length).toEqual(2);
    expect(screen.getAllByText("Style: Office Attire").length).toEqual(2);
    expect(screen.getAllByText("Gender: male").length).toEqual(2);
    expect(screen.getAllByText("Gender: female").length).toEqual(2);
    expect(screen.getAllByText("Gender: Male").length).toEqual(4);
    expect(screen.getAllByText("See More Details").length).toEqual(8);
  });
});
