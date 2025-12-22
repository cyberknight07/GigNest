import React, { useState } from 'react'
import CatCard from '../categoryCard/CatCard'
import "./Slide.css"



const Slide = ({data}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5; // number of images to show

  const visibleSlides = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleSlides.push(data[(currentIndex + i) % data.length]);
  }
  // Move to next slide
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  // Move to previous slide
  const prev = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + data.length) % data.length
    );
  };

  // Get 5 images based on currentIndex
    


  
  return (
    <div className=".slider">
        
          <div className="c">
              <button className='buttonLeft' onClick={prev}>left</button>
              <div className="main-container" >
                  {visibleSlides.map((item, idx) => (
                  <CatCard key= {idx} item={item} className={`slide ${idx === 0 ? "shrink" : ""} ${idx === visibleCount - 1 ? "grow" : ""}`}/>
                  ))}
              </div>
              <button className='buttonRight' onClick={next}>right</button>
          </div>
      
    </div>
  )
}

export default Slide