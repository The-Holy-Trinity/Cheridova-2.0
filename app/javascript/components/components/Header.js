import React from "react";
import Navigation from "./Navigation";
const Header = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Navigation {...props} />
    </div>
  );
};

export default Header;
