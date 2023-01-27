import React from "react";
import { Card, CardBody, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const OutfitOffice = ({ outfits }) => {
  const officeOutfits = outfits.filter((outfit) => {
    if (outfit.style === "Office Attire") {
      return outfit;
    }
  });
  return (
    <main className="outfit-index-cards">
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 items-center">
        <div className="lg:grid lg:grid-cols-3 justify-items-center gap-8">
          {officeOutfits?.map((outfit, index) => {
            return (
              <Card
                style={{
                  width: "14rem",
                }}
                key={index}
              >
                <div className="w-full rounded hover:shadow-2xl">
                  <img
                    className="object-cover h-48 w-96"
                    alt={`profile of outfits ${outfit.name}`}
                    src={outfit.image}
                  />
                </div>
                <CardBody className="bg-lightgray font-garamond text-white">
                  <CardSubtitle className="mb-2" tag="h6">
                    Style: {outfit.style}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2" tag="h6">
                    Gender: {outfit.gender}
                  </CardSubtitle>
                  <NavLink to={`/OutfitsShow/${outfit.id}`}>
                    <button className="bg-green hover:bg-gray text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded">
                      {" "}
                      See More Details
                    </button>
                  </NavLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default OutfitOffice;
