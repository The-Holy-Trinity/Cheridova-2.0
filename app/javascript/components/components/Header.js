import React from "react";
import Navigation from "./Navigation";
const Header = (props) => {
  return (
    <>
      <div class="relative h-32 w-32 ...">
        <div class="absolute inset-x-0 top-0 h-16 ...">Chéridova</div>
      </div>
      <Navigation {...props} />
    </>
  );
};

export default Header;
