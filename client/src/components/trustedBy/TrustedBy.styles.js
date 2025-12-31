import styled from "styled-components";

export const TrustedContainer = styled.div`
  display: flex;
  background-color: lightgray;
  color: grey;
  height: 100px;
  justify-content: center;
  align-items: center; /* vertically center content */
`;

export const TrustedInner = styled.div`
  width: 760px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: rgb(90, 5, 5);
  font-weight: 500;

  @media (max-width: 800px) {
    width: 95%;
    overflow-y:auto;
    scrollbar-width:none;
  }
`;

export const TrustedText = styled.span`
  white-space: nowrap;
`;

export const TrustedImage = styled.img`
  height: 80px;
  object-fit: contain;
  user-select: none;
`;
