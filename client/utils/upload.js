import React from 'react'
import axios from 'axios';

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "gignest");

    try{
      const res = await axios.post("https://api.cloudinary.com/v1_1/aj24/image/upload", data);

      const {url} = res.data;
      return url;

    } catch(e){
      console.log(e);
    }
  }

export default upload