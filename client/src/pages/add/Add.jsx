import React from "react";
import { AddWrapper, Container, Sections, Left, Right } from "./Add.styles";

import upload from "../../utils/uploadData.js";
import { useState } from "react";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    cover: "",
    images: [],
    description: "",
    shortDesc: "",
    price: 0,
    deliveryTime: 0,
    revisionTime: 0,
    features: [],
  });

  const handleFormData = () => {};

  const handleCreateRequest = (e) => {
    e.preventDefault();

    // Update Images
    upload();
    // Add gig to database
  };

  return (
    <AddWrapper>
      <Container>
        <h1>Add New Gig</h1>

        <Sections>
          <Left>
            <label>Title</label>
            <input
              type="text"
              placeholder="Tikhjfkf"
              value={formData.title}
              onChange={handleFormData}
            />

            <label>Category</label>
            <select value={formData.category} onChange={handleFormData}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label>Cover Image</label>
            <input
              type="file"
              value={formData.cover}
              onChange={handleFormData}
            />

            <label>Upload Image</label>
            <input
              type="file"
              multiple
              value={formData.images}
              onChange={handleFormData}
            />

            <label>Description</label>
            <textarea
              placeholder="Write description"
              rows="16"
              value={formData.description}
              onChange={handleFormData}
            />

            <button onClick={handleCreateRequest}>Create</button>
          </Left>

          <Right>
            <label>Short Description</label>
            <input
              type="text"
              placeholder="e.g., Tikhjfkf"
              value={formData.shortDesc}
              onChange={handleFormData}
            />

            <label>Delivery Time</label>
            <input
              type="number"
              min={1}
              value={formData.deliveryTime}
              onChange={handleFormData}
            />

            <label>Revision number</label>
            <input
              type="number"
              min={1}
              value={formData.revisionTime}
              onChange={handleFormData}
            />

            <label>Add Features</label>
            <input
              type="text"
              placeholder="e.g., Tikhjfkf"
              value={formData.features}
              onChange={handleFormData}
            />

            <label>Price</label>
            <input
              type="number"
              placeholder="23"
              value={formData.price}
              onChange={handleFormData}
            />
          </Right>
        </Sections>
      </Container>
    </AddWrapper>
  );
};

export default Add;
