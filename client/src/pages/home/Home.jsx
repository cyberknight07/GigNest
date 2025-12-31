import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { data } from "../../data";
import {
  HomeContainer,
  FeaturesSection,
  FeaturesContainer,
  Item,
  Title,
  Description,
  Video,
  CheckImg,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Featured />
      <TrustedBy />
      <Slide data={data} />
      <FeaturesSection>
        <FeaturesContainer>
          <Item first>
            <h1>A whole world of freelance talent at your fingertips</h1>

            <Title>
              <CheckImg src="./imgs/check.png" alt="check" />
              The best for every budget
            </Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              iusto!
            </Description>

            <Title>
              <CheckImg src="./imgs/check.png" alt="check" />
              The best for every budget
            </Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              iusto!
            </Description>

            <Title>
              <CheckImg src="./imgs/check.png" alt="check" />
              The best for every budget
            </Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              iusto!
            </Description>
          </Item>

          <Item last>
            <Video src="./imgs/video.mp4" controls />
          </Item>
        </FeaturesContainer>
      </FeaturesSection>
      <Slide data={data} />
    </HomeContainer>
  );
};

export default Home;
