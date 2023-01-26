import React from "react";
import { Card, CardBody, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const OutfitDate = ({ outfits }) => {
  const dateOutfits = outfits.filter((outfit) => {
    if (outfit.style === "Date Night") {
      return outfit;
    }
  });

  return (
    <main className="outfit-index-cards">
      {dateOutfits?.map((outfit, index) => {
        return (
          <Card
            style={{
              width: "14rem",
            }}
            key={index}
          >
            <img alt={`profile of outfits ${outfit.name}`} src={outfit.image} />
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Style: {outfit.style}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Gender: {outfit.gender}
              </CardSubtitle>
              <NavLink to={`/OutfitsShow/${outfit.id}`}>
                <Button>See More Details</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};

export default OutfitDate;
