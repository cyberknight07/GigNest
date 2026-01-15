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
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
              <input
                type="text"
                placeholder="Search the gigs"
                value={search}
                onChange={handleSearch}
              />
            </SearchText>
            {console.log(search.length)}
            <SearchButton
              disabled={() => {
                search.length === 0 ? true : false;
              }}
              onClick={() => {
                navigate(`/gigs?search=${search}`);
              }}
            >
              Search
            </SearchButton>
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
