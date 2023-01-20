import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(
      screen.getByText(
        `Chéridova is your one-stop shop to upgrading your wardrobe. Inspirations to many occasions we face in our day to day lives.`
      )
    ).toBeInTheDocument();
  });
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    userEvent.click(screen.getByText("View Categories"));
    expect(screen.getByText("View Categories")).toBeInTheDocument();
  });
});
