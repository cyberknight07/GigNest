import React from 'react'
import "./add.css";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="title">Title</label>
            <input type='text' placeholder='Tikhjfkf'/>
            <label htmlFor="category">Category</label>
            <select name='cats' id='cats'>
              <option value="design">Design</option>   
              <option value="web">Web Development</option>   
              <option value="animation">Animation</option>   
              <option value="music">Music</option>   
            </select>
            <label htmlFor="cover">Cover Image</label>
            <input type="file" />
            <label htmlFor="upload">Upload Image</label>
            <input type="file" multiple />
            <label htmlFor="description">Description</label>
            <textarea name="description" placeholder='Write description' id="" cols="20" rows="16"></textarea>
            <button>Send</button>
          </div>
          <div className="right">
            <label htmlFor="service_title">Service title</label>
            <input type='text' placeholder='e.g., Tikhjfkf'/>
            <label htmlFor="shortdesc">Short Description</label>
            <input type='text' placeholder='e.g., Tikhjfkf'/>
            <label htmlFor="delivery">Delivery Time</label>
            <input type='number' min={1}/>
            <label htmlFor="revision">Revision number</label>
            <input type='number'  min={1}/> 
            <label htmlFor="add features">Add Features</label>
            <input type='text' placeholder='e.g., Tikhjfkf'/>
            <label htmlFor="price">Price</label>
            <input type='number' placeholder='23'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Add;