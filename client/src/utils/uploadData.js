import React from 'react'
import axios from 'axios';

const CLOUDINARY_URL = import.meta.env.VITE_APP_CLOUDINARY_URL;

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