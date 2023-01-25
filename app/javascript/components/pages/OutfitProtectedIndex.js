import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const OutfitProtectedIndex = ({ outfits, logged_in, current_user, deleteOutfit}) => {
  const current_user_outfits = outfits?.filter((outfit) => {
    return outfit.user_id === current_user.id;
  });
  return (
    <>
      <h2>My Fashionable Tastes</h2>
      {current_user_outfits?.map((outfit, index) => {
        return (
          <Card
            style={{
              width: "14rem",
            }}
            key={index}
          >
            <img
              alt={`profile of outfits ${outfit.name}`}
              src={outfit.image}
            />
            <CardBody>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                Name: {outfit.name}
              </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                Style: {outfit.style}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Gender: {outfit.gender}
              </CardSubtitle>
              <NavLink to={`/OutfitsShow/${outfit.id}`}>
                <Button>See More Details</Button>
              </NavLink>
              <NavLink to="/Outfits">
                <Button onClick={() => deleteOutfit(`${outfit.id}`)}>Delete this outfit</Button>
              <NavLink to={`/OutfitEdit/${outfit.id}`}>
                <Button>Edit this outfit</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default OutfitProtectedIndex;