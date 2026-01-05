import React from "react";
import { AddWrapper, Container, Sections, Left, Right, ImageDiv } from "./Add.styles";

import upload from "../../utils/uploadData.js";
import { useState } from "react";
import newRequest from "../../utils/apiRequest.js";

const Add = () => {
  const [imgFile, setImgFile] = useState(null);
  const [uploading, setUploading] = useState(false);
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
    features: "",
  });

  const handleFormData = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(formData);
  };

  const handleImage = async (e) => {
    try {
      setUploading(true);
      const url = await upload(imgFile);
      console.log(url);
      setUploading(false);
      setFormData((prev) => {
        return { ...prev, [e.target.name]: url };
      });
    } catch (error) {
      console.log("Image not uploaded.", error);
    }
  };

  const handleCreateRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post("gigs", formData);
      console.log("Add.js" + response);
    } catch (error) {
      console.log("Error in adding gig to MongoDB. " + error);
    }
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
              name="title"
              placeholder="Tikhjfkf"
              value={formData.title}
              onChange={handleFormData}
            />

            <label>Category</label>
            <select
              value={formData.category}
              name="category"
              onChange={handleFormData}
            >
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label>Cover Image</label>
            <ImageDiv>
              <input
              type="file"
              name="cover"
              onChange={(e) => setImgFile(e.target.files[0])}
            />
            <button onClick={handleImage} disabled = {uploading}>Upload</button>
            </ImageDiv>

            <label>Upload Image</label>
            <ImageDiv>
              <input
              type="file"
              multiple
              name="images"
              onChange={(e) => setImgFile(e.target.files[0])}
            />
            <button onClick={handleImage} disabled={uploading}>Upload</button>
            </ImageDiv>

            <label>Description</label>
            <textarea
              placeholder="Write description"
              rows="16"
              name="description"
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
              name="shortDesc"
              value={formData.shortDesc}
              onChange={handleFormData}
            />

            <label>Delivery Time</label>
            <input
              type="number"
              min={1}
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleFormData}
            />

            <label>Revision number</label>
            <input
              type="number"
              min={1}
              name="revisionTime"
              value={formData.revisionTime}
              onChange={handleFormData}
            />

            <label>Add Features</label>
            <input
              type="text"
              name="features"
              placeholder="e.g., Tikhjfkf"
              value={formData.features}
              onChange={handleFormData}
            />

            <label>Price</label>
            <input
              type="number"
              placeholder="23"
              name="price"
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
