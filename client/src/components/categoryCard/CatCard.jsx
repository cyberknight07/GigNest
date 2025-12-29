import React from "react";
import { Link } from "react-router-dom";
import { CatCardContainer, Desc, Title } from "./CatCard.styles";

const CatCard = ({ item }) => {
  return (
    <Link className="link" to={`/gigs?cat=${item.title}`}>
      <CatCardContainer>
        <img src={item.img} alt={item.title} />
        <Desc>{item.desc}</Desc>
        <Title>{item.title}</Title>
      </CatCardContainer>
    </Link>
  );
};

export default CatCard;
