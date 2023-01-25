import React from "react";
// import "./Category.css";
import { NavLink } from "react-router-dom";
const Category = (props) => {
  return (
    <div
      className="blue"
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <h1
        style={{
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        Categories
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <NavLink to="/" className="nav-link p-2">
          <button>Office Attire</button>
        </NavLink>

        <NavLink to="/" className="nav-link">
          <button>Casual</button>
        </NavLink>

        <NavLink to="/OutfitsFormal" className="nav-link">
          <button>Formal</button>
        </NavLink>

        <NavLink to="/" className="nav-link">
          <button>Date Night</button>
        </NavLink>
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <NavLink to="/Outfits" className="nav-link">
          <button>All Outfits</button>
        </NavLink>
      </div>
    </div>
  );
};
export default Category;
