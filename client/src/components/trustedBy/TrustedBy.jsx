import React from "react";
import {
  TrustedContainer,
  TrustedInner,
  TrustedText,
  TrustedImage,
} from "./TrustedBy.styles";

const logos = [
  "./imgs/google.png",
  "./imgs/google.png",
  "./imgs/google.png",
  "./imgs/google.png",
  "./imgs/google.png",
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
