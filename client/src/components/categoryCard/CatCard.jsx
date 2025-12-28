import React from "react";
import { Link } from "react-router-dom";
import { CatCardContainer, Desc, Title } from "./CatCard.styles";

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design" className="link">
      <CatCardContainer>
        <img src={item.img} alt={item.title} />
        <Desc>{item.desc}</Desc>
        <Title>{item.title}</Title>
      </CatCardContainer>
    </Link>
  );
};

export default CatCard;
