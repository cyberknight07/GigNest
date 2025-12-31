import React from 'react'
import axios from 'axios';
import {CLOUDINARY_URL} from "./config.js";


const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "gignest");

    try{
      const res = await axios.post(CLOUDINARY_URL, data);

      const {url} = res.data;
      return url;

    } catch(e){
      console.log(e);
    }
  }

export default upload