import React from "react";
import accessories from "../../../assets/photos/accessories.png";


const NotFound = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:items-center gap-12 md:h-full">
        <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 items-center">
          {/* image section */}
          <div className="lg:grid lg:grid-cols-2 justify-items-center gap-2">
            <img
              alt="notfoundpage"
              className="h-auto max-w-lg rounded-lg"
              src={accessories}
            />

            {/* text section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32 mb-7 text-3xl font-garamond md:justify-center md:text-center gap-12">
              <div className="text-center">
                <p className="text-7xl text-red-400">404 ERROR</p>
                <p className="text-2xl">
                  The Outfits you seek are lost in the clothes pile.
                </p>
                <p className="text-2xl">
                  Please navigate back to the home page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
