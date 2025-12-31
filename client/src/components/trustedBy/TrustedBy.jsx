import React from "react";
import {
  TrustedContainer,
  TrustedInner,
  TrustedText,
  TrustedImage,
} from "./TrustedBy.styles";

const logos = [
  "imgs/pinterest.svg",
  "imgs/linkedin.svg",
  "imgs/google1.svg",
  "imgs/twitter.svg",
  "imgs/facebook.svg",
];

const TrustedBy = () => {
  return (
    <TrustedContainer>
      <TrustedInner>
        <TrustedText>Trusted by:</TrustedText>
        {logos.map((logo, idx) => (
          <TrustedImage key={idx} src={logo} alt={`Trusted logo ${idx + 1}`} />
        ))}
      </TrustedInner>
    </TrustedContainer>
  );
};

export default TrustedBy;
