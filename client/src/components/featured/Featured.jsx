import React, { useState } from "react";
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

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  

  return (
    <FeaturedWrapper>
      <Container>
        <Left>
          <Title>
            Find the perfect <i>freelance</i> services for your business.
          </Title>

          <Search>
            <SearchText>
              <a href={`/gigs?search=${search}`} target="_self"><img src="imgs/search.svg" alt="search icon" /></a>
              <input type="text" placeholder="Search the gigs" value={search} onChange={handleSearch} />
            </SearchText>
            <SearchButton>Search</SearchButton>
          </Search>

          <Popular>
            <span>Popular:</span>
            <button >Hero</button>
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
