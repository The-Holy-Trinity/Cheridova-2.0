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
      <nav className="bg-beige px-2 py-3 w-full fixed z-20 top-0 left-0  grid grid-flow-col auto-cols-fr-1 font-garamond">
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="w-full flex flex-wrap items-center gap-4 text-gray">
            <NavLink to="/" className="nav-link">
              <button>Home</button>
            </NavLink>
            <NavLink to="/Categories" className="nav-link">
              <button>View Categories</button>
            </NavLink>
            <NavLink to="/About" className="nav-link">
              <button>About</button>
            </NavLink>
            {logged_in && (
              <NavLink to="/MyUploads" className="nav-link">
                <button>My Uploads</button>
              </NavLink>
            )}
            {logged_in && (
              <NavLink to="Upload" className="nav-link">
                <button>Upload</button>
              </NavLink>
            )}
            {logged_in && (
              <button>
                <a href={sign_out_route} className="nav-link">
                  Sign Out
                </a>
              </button>
            )}
            {!logged_in && (
              <button>
                <a href={sign_in_route} className="nav-link">
                  Sign In
                </a>
              </button>
            )}
            {!logged_in && (
              <button>
                <a href={new_user_route} className="nav-link">
                  Sign Up
                </a>
              </button>
            )}
          </div>
          <div className="items-center">
            <h4 className="text-2xl font-bold">Chéridova</h4>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
