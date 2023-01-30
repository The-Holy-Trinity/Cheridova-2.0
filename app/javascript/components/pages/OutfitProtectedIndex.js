import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

const OutfitProtectedIndex = ({
  outfits,
  logged_in,
  current_user,
  deleteOutfit,
}) => {
  const current_user_outfits = outfits?.filter((outfit) => {
    return outfit.user_id === current_user.id;
  });
  return (
    <>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="font-garamond text-center pt-4">
            My Fashionable Taste
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 items-center pt-4">
        <div className="lg:grid lg:grid-cols-3 justify-items-center gap-8">
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
                  className="object-cover h-48 w-96"
                />
                <CardBody className="bg-lightbeige">
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Name: {outfit.name}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Style: {outfit.style}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Gender: {outfit.gender}
                  </CardSubtitle>
                  <div className="flex flex-col space-y-2">
                    <NavLink to={`/OutfitsShow/${outfit.id}`}>
                      <button className="bg-green hover:bg-gray text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded">
                        See More Details
                      </button>
                    </NavLink>
                    <NavLink to="/Outfits">
                      <button
                        className="bg-green hover:bg-gray text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded"
                        onClick={() => deleteOutfit(`${outfit.id}`)}
                      >
                        Delete this outfit
                      </button>
                    </NavLink>
                    <NavLink to={`/OutfitEdit/${outfit.id}`}>
                      <button className="bg-green hover:bg-gray text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded">
                        Edit this outfit
                      </button>
                    </NavLink>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OutfitProtectedIndex;
