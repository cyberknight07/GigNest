import React, { useEffect, useState } from "react";
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
import newRequest from "../../utils/apiRequest.js";

const GigCard = ({ item }) => {
  const [seller, setSeller] = useState({}); 
  // Update - ADD headers for cookie which is called in verifyToken middleware.
  useEffect(() => {
    const fetchSeller = async () => {
      await newRequest
        .get("users/single/" + item.userId)        
        .then((res) => {
          setSeller(res?.data?.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchSeller();
  }, []);

  return (
    <Link to={`gig/${item._id}`} className="link">
      <GigCardWrapper>
        <GigImage src={item?.cover || 'imgs/gigimage.svg'} />
        <InfoDiv>
          <UserSpan>
            <img src={seller.img || 'assets/avatar.svg'} className="pp" />
            <h4>{seller.username}</h4>
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
