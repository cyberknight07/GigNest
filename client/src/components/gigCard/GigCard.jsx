import React from "react";
import {
  GigCardWrapper,
  GigImage,
  InfoDiv,
  UserSpan,
  HorizontalLine,
  TitleParagraph,
  StarsSpan,
  DetailsWrapper,
  PriceDiv,
} from "./GigCard.styles.js";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to={`gig/${item._id}`} className="link">
      <GigCardWrapper>
        <GigImage src={item.cover} />
        <InfoDiv>
          <UserSpan>
            <img src={item.pp} className="pp" />
            <text>{item.username}</text>
          </UserSpan>
          <TitleParagraph>{item.title}</TitleParagraph>
          <StarsSpan>
            <img src="imgs/star.svg" />
            {item.totalStars}
          </StarsSpan>
        </InfoDiv>
        <HorizontalLine />
        <DetailsWrapper>
          <img src="imgs/heart.svg" />
          <PriceDiv>
            <p>Starting at</p>
            <p>${item.price}</p>
          </PriceDiv>
        </DetailsWrapper>
      </GigCardWrapper>
    </Link>
  );
};

export default GigCard;
