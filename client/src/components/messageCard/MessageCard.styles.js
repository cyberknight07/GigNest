import styled from "styled-components";

export const ItemBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 0px 8px;
  max-width: 40vw;
  font-size: 18px;
`;

export const OwnerItemBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 0px 8px;
  max-width: 40vw;
  font-size: 18px;

  flex-direction: row;
  align-items: flex-end;

  p {
    border-radius: 20px 0px 20px 20px;
    background-color: rgb(41, 41, 179);
    color: white;
  }
`;

export const ItemImage = styled.img`
  margin-top: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ItemParagragh = styled.p`
  padding: 10px;
  background-color: lightgrey;
  color: rgb(83, 82, 82);
  border-radius: 0px 20px 20px 20px;
`;
