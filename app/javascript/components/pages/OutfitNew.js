import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const OutfitNew = ({ createOutfit, logged_in, current_user }) => {
  const navigate = useNavigate();
  const [newOutfit, setNewOutfit] = useState({
    name: "",
    top: "",
    bottom: "",
    shoes: "",
    accessories: "",
    style: "",
    image: "",
    gender: "",
    user_id: "",
  });
  const handleChange = (e) => {
    setNewOutfit({ ...newOutfit, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    newOutfit.user_id = current_user.id;
    createOutfit(newOutfit);
    navigate("/Outfits");
  };

  if (logged_in === true) {
    return (
      <div className="container font-garamond justify-items-center space-y-2 pt-10">
        <h2 className="text-center font-bold text-4xl">
          Show us your fashion taste.
        </h2>
        <p className="text-center text-2xl">We'd love to see your style.</p>
        <Form className="submitForm">
          <Row>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={newOutfit.name}
              />
            </FormGroup>

            <Col md={6}>
              <FormGroup>
                <Label for="top">Top</Label>
                <Input
                  type="text"
                  name="top"
                  placeholder="Top"
                  onChange={handleChange}
                  value={newOutfit.top}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="bottom">Bottom</Label>
                <Input
                  type="text"
                  name="bottom"
                  placeholder="Bottom"
                  onChange={handleChange}
                  value={newOutfit.bottom}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="shoes">Shoes</Label>
                <Input
                  type="text"
                  name="shoes"
                  placeholder="Shoes"
                  onChange={handleChange}
                  value={newOutfit.shoes}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="accessories">Accessories</Label>
                <Input
                  type="text"
                  name="accessories"
                  placeholder="Accessories"
                  onChange={handleChange}
                  value={newOutfit.accessories}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="style">Style</Label>
                <Input
                  type="text"
                  name="style"
                  placeholder="Style"
                  onChange={handleChange}
                  value={newOutfit.style}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  onChange={handleChange}
                  value={newOutfit.gender}
                />
              </FormGroup>
            </Col>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
                value={newOutfit.image}
              />
            </FormGroup>
          </Row>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="bg-green hover:bg-gray text-white font-bold font-garamond py-2 px-4 border-b-4 border-green hover:border-gray rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    );
  }
};

export default OutfitNew;
