import React from "react";
import { NavLink } from "react-router-dom";
const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      {logged_in && (
        <h1 class="text-3xl font-bold underline text-center">Welcome back!</h1>
      )}
      {logged_in && (
        <h1 class="text-1xl font-bold text-center">
          Ready to make your day way more flashy?
        </h1>
      )}

      {!logged_in && (
        <h1 class="text-3xl font-bold underline text-center">Welcome!</h1>
      )}
      {!logged_in && (
        <h1 class="text-2xl font-bold text-center">
          Chéridova is your one-stop shop to upgrading your wardrobe.
          Inspirations to many occasions we face in our day to day lives.
        </h1>
      )}
      {!logged_in && (
        <div className="bg-light green">
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-green">
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </button>
        </div>
      )}
      {!logged_in && (
        <div className="bg-light green">
          <button className="p-5 bg-purple font-semibold text-black hover:bg-red hover:text-black">
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </button>
        </div>
      )}
      <NavLink to="/Categories" className="nav-link">
        <button className="p-5 bg-purple font-semibold text-black text-center hover:bg-red hover:text-white">
          View Categories
        </button>
      </NavLink>
    </>
  );
};
export default Home;
