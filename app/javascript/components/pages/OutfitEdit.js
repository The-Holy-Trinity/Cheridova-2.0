import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
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
      <Form className="submitForm">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={editOutfit.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="top">Top</Label>
          <Input
            type="text"
            name="top"
            onChange={handleChange}
            value={editOutfit.top}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bottom">Bottom</Label>
          <Input
            type="text"
            name="bottom"
            onChange={handleChange}
            value={editOutfit.bottom}
          />
        </FormGroup>
        <FormGroup>
          <Label for="shoes">Shoes</Label>
          <Input
            type="text"
            name="shoes"
            onChange={handleChange}
            value={editOutfit.shoes}
          />
        </FormGroup>
        <FormGroup>
          <Label for="accessories">Accessories</Label>
          <Input
            type="text"
            name="accessories"
            onChange={handleChange}
            value={editOutfit.accessories}
          />
        </FormGroup>
        <FormGroup>
          <Label for="style">Style</Label>
          <Input
            type="text"
            name="style"
            onChange={handleChange}
            value={editOutfit.style}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            onChange={handleChange}
            value={editOutfit.image}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input
            type="text"
            name="gender"
            onChange={handleChange}
            value={editOutfit.gender}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Outfit Changes!
        </Button>
      </Form>
    );
  }
};

export default OutfitEdit;
