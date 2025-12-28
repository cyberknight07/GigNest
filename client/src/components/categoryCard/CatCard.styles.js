import styled from "styled-components";

export const CatCardContainer = styled.div`
  width: 252px;
  height: 344px;
  color: white;
  cursor: pointer;
  position: relative;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Desc = styled.span`
  font-weight: 300;
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  position: absolute;
  top: 40px;
  left: 15px;
`;
