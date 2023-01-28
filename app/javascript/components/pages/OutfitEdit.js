import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const OutfitEdit = ({ outfits, updateOutfit, logged_in, current_user }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  let currentOutfit = outfits?.find((outfit) => outfit.id === +id);
  const [editOutfit, setEditOutfit] = useState({
    name: currentOutfit.name,
    top: currentOutfit.top,
    bottom: currentOutfit.bottom,
    shoes: currentOutfit.shoes,
    accessories: currentOutfit.accessories,
    style: currentOutfit.style,
    image: currentOutfit.image,
    gender: currentOutfit.gender,
    user_id: currentOutfit.user_id,
  });
  const handleChange = (e) => {
    setEditOutfit({ ...editOutfit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (outfit) => {
    updateOutfit(editOutfit, currentOutfit.id);
    navigate(`/OutfitsShow/${id}`);
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
                value={editOutfit.name}
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
                  value={editOutfit.top}
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
                  value={editOutfit.bottom}
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
                  value={editOutfit.shoes}
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
                  value={editOutfit.accessories}
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
                  value={editOutfit.style}
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
                  value={editOutfit.gender}
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
                value={editOutfit.image}
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

export default OutfitEdit;
