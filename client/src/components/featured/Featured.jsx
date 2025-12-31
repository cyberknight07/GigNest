import React from "react";
import {
  FeaturedWrapper,
  Container,
  Left,
  Title,
  Search,
  SearchText,
  SearchButton,
  Popular,
  Right,
} from "./Featured.styles";

const Featured = () => {
  return (
    <FeaturedWrapper>
      <Container>
        <Left>
          <Title>
            Find the perfect <i>freelance</i> services for your business.
          </Title>

          <Search>
            <SearchText>
              <img src="imgs/search.svg" alt="search icon" />
              <input type="text" placeholder="Search" />
            </SearchText>
            <SearchButton>Search</SearchButton>
          </Search>

          <Popular>
            <span>Popular:</span>
            <button>Hero</button>
            <button>Villain</button>
            <button>Rowdy</button>
          </Popular>
        </Left>

        <Right>
          <img src="assets/avatar.svg" alt="banner" />
        </Right>
      </Container>
    </FeaturedWrapper>
  );
};

export default Featured;
