import React, { useState } from "react";
import { gigs } from "../../data";
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
} from "./Gigs.styles";

const Gigs = () => {
  const sortingList = ["Best Selling", "High to Low", "Low to High"];
  const [sorting, setSorting] = useState(sortingList[0]);
  const [active, setActive] = useState(false);

  return (
    <GigsContainer>
      <Container>
        <HeaderText as="p">Gignest - Graphics & Design</HeaderText>
        <HeaderText as="h1">AI Artists</HeaderText>
        <HeaderText as="p" small>
          Explore the boundaries of art and technology with Gignest AI Artists
        </HeaderText>

        <FilterHeader>
          <FilterSection>
            <FilterLabel>Budget</FilterLabel>
            <FilterInput type="text" name="min" placeholder="min" />
            <FilterInput type="text" name="max" placeholder="max" />
            <FilterButton>Apply</FilterButton>
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
          {gigs.map((item) => (
            <GigCard key={item.id} item={item} />
          ))}
        </GigList>
      </Container>
    </GigsContainer>
  );
};

export default Gigs;
