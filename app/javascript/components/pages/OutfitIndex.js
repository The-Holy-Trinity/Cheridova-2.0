import React from "react";
import { Card, CardBody, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const OutfitIndex = ({ outfits }) => {
  console.log(outfits);
  return (
    <main className="outfit-index-cards">
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 items-center">
        <div className="lg:grid lg:grid-cols-3 justify-items-center gap-8">
          {outfits?.map((outfit, index) => {
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
                <CardBody className="bg-burgundy">
                  <CardSubtitle className="mb-2 text-white font-garamond" tag="h6">
                    Style: {outfit.style}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-white font-garamond" tag="h6">
                    Gender: {outfit.gender}
                  </CardSubtitle>
                  <NavLink to={`/OutfitsShow/${outfit.id}`}>
                    <button className="bg-green font-garamond hover:bg-gray items-center text-white rounded-sm py-1 px-1 transition duration-500">
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

export default OutfitIndex;
