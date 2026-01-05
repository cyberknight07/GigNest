import React, { useEffect, useRef, useState } from "react";
import newRequest from "../../utils/apiRequest.js";
import GigCard from "../../components/gigCard/GigCard.jsx";
import {
  GigsContainer,
  Container,
  HeaderText,
  FilterHeader,
  FilterSection,
  FilterLabel,
  FilterInput,
  FilterButton,
  SortingSection,
  SortingLabel,
  Dropdown,
  DropdownTitle,
  DropdownList,
  DropdownItem,
  DropdownDivider,
  GigList,
  SubHeaderText,
} from "./Gigs.styles";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const sortingList = ["Best Selling", "Latest"];
  const [sorting, setSorting] = useState(sortingList[0]);
  const [active, setActive] = useState(false);
  const [gigs, setGigs] = useState([]);
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();

  const ApplyFilter = () => {
    console.log(search); //"?cat=Mountain%20Adventure"
    console.log("Value " + minRef + "Value " + maxRef);
  };

  useEffect(() => {
    try {
      
      async function fetchGigs() {
        const response = await newRequest.get("gigs");
        console.log(response?.data);
        setGigs(response.data.data);
      }
      fetchGigs();
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <GigsContainer>
      <Container>
        <HeaderText as="p" small>
          Gignest -{`>`} <SubHeaderText>{search.split("=")[1]}</SubHeaderText>
        </HeaderText>
        <HeaderText as="h1">AI Artists</HeaderText>
        <HeaderText as="p" small>
          Explore the boundaries of art and technology with Gignest AI Artists
        </HeaderText>

        <FilterHeader>
          <FilterSection>
            <FilterLabel>Budget</FilterLabel>
            <FilterInput
              ref={minRef}
              type="text"
              name="min"
              placeholder="min"
            />
            <FilterInput
              ref={maxRef}
              type="text"
              name="max"
              placeholder="max"
            />
            <FilterButton onClick={ApplyFilter}>Apply</FilterButton>
          </FilterSection>

          <SortingSection>
            <SortingLabel>Sort By:</SortingLabel>
            <Dropdown>
              <DropdownTitle onClick={() => setActive(!active)}>
                {sorting}
              </DropdownTitle>
              {active && (
                <DropdownList>
                  {sortingList.map((sort, index) => (
                    <React.Fragment key={index}>
                      {index !== 0 && <DropdownDivider />}
                      <DropdownItem
                        onClick={() => {
                          setSorting(sort);
                          setActive(false);
                        }}
                      >
                        {sort}
                      </DropdownItem>
                    </React.Fragment>
                  ))}
                </DropdownList>
              )}
            </Dropdown>
          </SortingSection>
        </FilterHeader>

        <GigList>
          {gigs.map((item, index) => (
            <GigCard key={index} item={item} />
          ))}
        </GigList>
      </Container>
    </GigsContainer>
  );
};

export default Gigs;
