import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flex: "space-between",
          backgroundColor: "lightblue",
        }}
      >
        <NavLink to="/" className="nav-link">
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
            Home
          </button>
        </NavLink>
        <NavLink to="/Categories" className="nav-link">
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
            View Categories
          </button>
        </NavLink>
        <NavLink to="/About" className="nav-link">
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
            About
          </button>
        </NavLink>
        {logged_in && (
          <NavLink to="/MyCatalog" className="nav-link">
            <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
              My Catalog
            </button>
          </NavLink>
        )}
        {logged_in && (
          <NavLink to="/MyUploads" className="nav-link">
            <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
              My Uploads
            </button>
          </NavLink>
        )}
        {logged_in && (
          <NavLink to="Upload" className="nav-link">
            <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
              Upload
            </button>
          </NavLink>
        )}
        {logged_in && (
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
          </button>
        )}
        {!logged_in && (
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </button>
        )}
        {!logged_in && (
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-white">
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </button>
        )}
      </div>
    </>
  );
};
export default Navigation;
