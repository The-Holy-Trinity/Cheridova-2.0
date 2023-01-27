import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import Active from "../../../assets/photos/yellowstar.png";
import Inactive from "../../../assets/photos/blackstar.png";
const OutfitShow = ({ outfits, handleChangeActive, active }) => {
  const res = useParams();
  const { id } = res;

  const currentOutfit = outfits?.find((outfit) => outfit.id === +id);

  return (
    <>
      <div className="flex flex-cols-1 justify-center font-garamond pt-4">
        {currentOutfit ? (
          <Card className="h-80 w-96">
            <img
              alt={`profile of outfits ${currentOutfit.name}`}
              src={currentOutfit.image}
            />
            <div style={{width:"20px", marginLeft:"10px"}}>
            {active ? (
          <img
            className="active"
            src={Active}
            alt="yellow star"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Inactive}
            alt="black and white star"
            onClick={() => handleChangeActive()}
          />
         
        )} </div>
            <CardBody>
              <CardTitle className="text-center text-bold" tag="h5">
                {currentOutfit.style}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Gender: {currentOutfit.gender}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Top: {currentOutfit.top}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Bottom: {currentOutfit.bottom}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Shoes: {currentOutfit.shoes}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Accessories: {currentOutfit.accessories}
              </CardSubtitle>
            </CardBody>
            <div className="flex items-center justify-center pb-4">
              <NavLink to={`/Outfits`}>
                <button className="bg-gray hover:bg-green text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded pb-8">
                  Back to Outfits
                </button>
              </NavLink>
            </div>
          </Card>
        ) : (
          <div>
            <p>Outfit not located</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OutfitShow;
