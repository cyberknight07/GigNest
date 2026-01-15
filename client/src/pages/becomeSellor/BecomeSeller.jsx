import React from "react";
import { SellerButton, SellerContainer } from "./BecomeSeller.styles";
import { Link } from "react-router-dom";

const BecomeSeller = () => {
  return (
    <SellerContainer>
      <h1>Start your business over here</h1>
      <h2>Connect with world and sell your services to them.</h2>
      <SellerButton
      >
        <Link to="/signup" className="link">
          Create your seller account
        </Link>
      </SellerButton>
    </SellerContainer>
  );
};

export default BecomeSeller;
