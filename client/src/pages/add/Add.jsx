import React from "react";
import {
  AddWrapper,
  Container,
  Sections,
  Left,
  Right,
} from "./Add.styles";

const Add = () => {
  return (
    <AddWrapper>
      <Container>
        <h1>Add New Gig</h1>

        <Sections>
          <Left>
            <label>Title</label>
            <input type="text" placeholder="Tikhjfkf" />

            <label>Category</label>
            <select>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label>Cover Image</label>
            <input type="file" />

            <label>Upload Image</label>
            <input type="file" multiple />

            <label>Description</label>
            <textarea placeholder="Write description" rows="16" />

            <button>Send</button>
          </Left>

          <Right>
            <label>Service title</label>
            <input type="text" placeholder="e.g., Tikhjfkf" />

            <label>Short Description</label>
            <input type="text" placeholder="e.g., Tikhjfkf" />

            <label>Delivery Time</label>
            <input type="number" min={1} />

            <label>Revision number</label>
            <input type="number" min={1} />

            <label>Add Features</label>
            <input type="text" placeholder="e.g., Tikhjfkf" />

            <label>Price</label>
            <input type="number" placeholder="23" />
          </Right>
        </Sections>
      </Container>
    </AddWrapper>
  );
};

export default Add;
