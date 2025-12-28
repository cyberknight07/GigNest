import styled from "styled-components";

export const HomeContainer = styled.div``;

export const FeaturesSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightblue;
  padding: 32px;
`;

export const FeaturesContainer = styled.div`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 98vw) {
    width: 95%;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: ${(props) => (props.first ? 2 : props.last ? 3 : 1)};
  width: ${(props) => (props.first || props.last ? "auto" : "100%")};
`;

export const Title = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 600;
  align-items: center;
`;

export const CheckImg = styled.img`
  background-color: green;
  border-radius: 60%;
  width: 20px;
`;

export const Description = styled.p`
  color: grey;
`;

export const Video = styled.video`
  width: 45vw;
  border-radius: 5px;
`;
