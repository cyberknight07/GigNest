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
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import decodedUrl from "../../utils/decodeUrl.js";

const Gigs = () => {
  const sortingList = ["Best Selling", "Latest"];
  const [sorting, setSorting] = useState(sortingList[0]);
  const [active, setActive] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const [filters, setFilter] = useState({});
  const { search } = useLocation();

  const fetchGigs = async () => {
    console.log(
      filters,
      "Sorting => " + sorting + " Search => " + search.split("?")[1]
    );
    const res = await newRequest.get("gigs", {
      params: {
        ...filters,
        sort: sorting === "Latest" ? "createdAt" : "sales",
        search: search === "" ? "" : decodedUrl(search.split("=")[1]),
      },
    });
    console.log(res.data.data);

    return res.data.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["gigs", filters, sorting, search],
    queryFn: fetchGigs,
  });

  const ApplyFilter = () => {
    console.log("Value " + minRef.current + "Value " + maxRef.ref);
    setFilter({
      min: minRef.current.value,
      max: maxRef.current.value,
    });
  };

  return (
    <GigsContainer>
      <Container>
        <HeaderText as="p" small>
          Gignest -{`>`} <SubHeaderText>{search === "" ? "All posts" : decodedUrl(search.split("=")[1])}</SubHeaderText>
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
          {isLoading ? (
            <div style={{ width:"full", display: "flex", justifyContent: "center", alignItems: "center" }}><Oval
              height={80}
              width={80}
              color="#4fa94d"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            /></div>
          ) : error?.message ? ( // Can not able to show error message
            <div>{error?.message}</div>
          ) : !data ? ( // Can not able to show this message when data is empty.
            <div>Nothing to show here.</div>
          ) : (
            data.map((item, index) => <GigCard key={index} item={item} />)
          )}
        </GigList>
      </Container>
    </GigsContainer>
  );
};

export default Gigs;
