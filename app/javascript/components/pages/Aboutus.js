import React from "react";
import Charlie from "../../../assets/photos/charlie.png"
import Bella from "../../../assets/photos/bella.png"
import Shannon from "../../../assets/photos/shannon.png"

const Aboutus = (props) => {
  return (
    <>
      <h1 className="text-5xl font-playfair font-bold text-center pt-10">
        Meet the Developers
      </h1>
      <div className="lg:grid lg:grid-cols-3 gap-20 pt-18 justify-items-center align-center p-20">
        {/* images */}
        <div>
          <img
            className="mx-auto rounded-full border-8 border-lime-600 h-64 w-64"
            src={Charlie}
          />
          <p className="text-center font-playfair pt-4 font-bold text-xl justify-wrap">
            Charlie Si
          </p>
          <sub className="text-center font-garamond text-lg justify-wrap">
            "An avid gamer with a great eye for fashion if you're a sweatshirt
            and jeans type of guy."
          </sub>
        </div>
        <div>
          <img
            className="mx-auto rounded-full border-8 border-indigo-500/75 h-64 w-64"
            src={Bella}
          />
          <p className="text-center font-playfair pt-4 font-bold text-xl">
            Annabella Chan
          </p>
          <sub className="mx-auto text-center font-garamond text-lg justify-wrap">
            "A San Francisco Bay Area native, with a natural California girl
            style."
          </sub>
        </div>
        <div>
          <img
            className="mx-auto rounded-full border-8 border-amber-200 h-64 w-64"
            src={Shannon}
          />
          <p className="text-center font-playfair pt-4 font-bold text-xl">
            Shannon Young
          </p>
          <sub className="text-center font-garamond text-lg justify-wrap">
            "A self proclaimed fashionista on a budget who can always find the
            most stylish things at prices that won't break the bank."
          </sub>
        </div>
      </div>
    </>
  );
};
export default Aboutus;
