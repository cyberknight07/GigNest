import React, { useState, useEffect } from "react";
import CatCard from "../categoryCard/CatCard";
import {
  SliderContainer,
  ControlsWrapper,
  ButtonLeft,
  ButtonRight,
  MainContainer,
  SlideItem,
} from "./Slide.styles";

const Slide = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  // Update visibleCount based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 480) setVisibleCount(1);
      else if (width < 768) setVisibleCount(3);
      else setVisibleCount(5);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Calculate visible slides based on currentIndex and visibleCount
  const visibleSlides = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleSlides.push(data[(currentIndex + i) % data.length]);
  }

  // Handlers to move slides
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <SliderContainer>
      <ControlsWrapper>
        <ButtonLeft onClick={prev} aria-label="Previous slide">
          &#8592;
        </ButtonLeft>

        <MainContainer visibleCount={visibleCount}>
          {visibleSlides.map((item, idx) => (
            <SlideItem
              key={idx}
              className={`${idx === 0 ? "shrink" : ""} ${
                idx === visibleCount - 1 ? "grow" : ""
              }`}
            >
              <CatCard item={item} />
            </SlideItem>
          ))}
        </MainContainer>

        <ButtonRight onClick={next} aria-label="Next slide">
          &#8594;
        </ButtonRight>
      </ControlsWrapper>
    </SliderContainer>
  );
};

export default Slide;
