import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
const OutfitShow = ({ outfits }) => {
    
  const res = useParams();
  const {id} = res
  
  const currentOutfit = outfits?.find(
    (outfit) => outfit.id === +id
  );

  return (
    <>
      <div>
        {currentOutfit ? (
          <Card
            style={{
              width: "14rem",
            }}
        
          >
            <img
              alt={`profile of outfits ${currentOutfit.name}`}
              src={currentOutfit.image}
            />
            <CardBody>
              <CardTitle tag="h5">{currentOutfit.style}</CardTitle>
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
            <NavLink to={`/Outfits`}>
              <Button>Back to outfits</Button>
            </NavLink>
          </Card>
        ):<div><p>Outfit not located</p></div>}
      </div>
    </>
  );
};

export default OutfitShow;