import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
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
      <Form className="submitForm">
        <FormGroup>
          <h2>Show us your fashion taste</h2>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={newOutfit.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="top">Top</Label>
          <Input
            type="text"
            name="top"
            onChange={handleChange}
            value={newOutfit.top}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bottom">Bottom</Label>
          <Input
            type="text"
            name="bottom"
            onChange={handleChange}
            value={newOutfit.bottom}
          />
        </FormGroup>
        <FormGroup>
          <Label for="shoes">Shoes</Label>
          <Input
            type="text"
            name="shoes"
            onChange={handleChange}
            value={newOutfit.shoes}
          />
        </FormGroup>
        <FormGroup>
          <Label for="accessories">Accessories</Label>
          <Input
            type="text"
            name="accessories"
            onChange={handleChange}
            value={newOutfit.accessories}
          />
        </FormGroup>
        <FormGroup>
          <Label for="style">Style</Label>
          <Input
            type="text"
            name="style"
            onChange={handleChange}
            value={newOutfit.style}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            onChange={handleChange}
            value={newOutfit.image}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input
            type="text"
            name="gender"
            onChange={handleChange}
            value={newOutfit.gender}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Outfit!
        </Button>
      </Form>
    );
  }
};

export default OutfitNew;
