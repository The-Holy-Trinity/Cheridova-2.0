import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import casual1 from "../../../assets/photos/casual1.png";
import fm2 from "../../../assets/photos/fm2.png";
import party from "../../../assets/photos/party.png";
import office from "../../../assets/photos/office.png";
import { motion } from "framer-motion/dist/framer-motion";

const Category = (props) => {
  return (
    <div className="container justify-items-center text-center space-y-6 pt-4">
      <div className="space-y-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-5xl font-playfair text-center space-y-4">
            Categories
          </h1>
          <NavLink to="/Outfits" className="nav-link pt-2">
            <button className="bg-coral hover:bg-gray text-white font-bold font-garamond py-2 px-2 border-b-2 border-gray hover:border-green rounded">
              All Outfits
            </button>
          </NavLink>
        </motion.div>
      </div>
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
        <div className="lg:grid lg:grid-cols-4 space-y-8 lg:gap-3 content-start">
          {/* office attire */}
          <div className="text-center space-y-4 pt-4 mt-2">
            <Card
              style={{
                width: "14rem",
              }}
            >
              <CardBody className="bg-charcoal text-white font-garamond">
                <CardSubtitle className="mb-2" tag="h6">
                  <NavLink to="/OutfitsOffice" className="nav-link">
                    <img
                      alt="office"
                      className="object-cover h-48 w-96"
                      src={office}
                    />
                    <button className="bg-lightgray hover:bg-green text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded">
                      Office Attire
                    </button>
                  </NavLink>
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>

          {/* casual*/}
          <div className="text-center space-y-4">
            <Card
              style={{
                width: "14rem",
              }}
            >
              <CardBody className="bg-gray text-white font-garamond">
                <NavLink to="/OutfitsCasual" className="nav-link">
                  <img
                    alt="casual1"
                    className="object-cover h-48 w-96"
                    src={casual1}
                  />
                  <button className="bg-brown hover:bg-gray text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded">
                    Casual
                  </button>
                </NavLink>
              </CardBody>
            </Card>
          </div>

          {/* formal */}
          <div className="text-center space-y-4">
            <Card
              style={{
                width: "14rem",
              }}
            >
              <CardBody className="bg-blue text-white font-garamond">
                <NavLink to="/OutfitsFormal" className="nav-link">
                  <img
                    alt="formal"
                    className="object-cover h-48 w-96"
                    src={fm2}
                  />
                  <button className="bg-gray hover:bg-green text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded">
                    Formal
                  </button>
                </NavLink>
              </CardBody>
            </Card>
          </div>

          {/* date night */}
          <div className="text-center space-y-4">
            <Card
              style={{
                width: "14rem",
              }}
            >
              <CardBody className="bg-purple text-white font-garamond">
                <NavLink to="/OutfitsDate" className="nav-link">
                  <img
                    alt="party"
                    className="object-cover h-48 w-96"
                    src={party}
                  />
                  <button className="bg-lightgray hover:bg-green text-white font-bold font-garamond py-1 px-1 border-b-2 border-gray hover:border-green rounded">
                    Date Night
                  </button>
                </NavLink>
              </CardBody>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Category;
