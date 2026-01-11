import styled from "styled-components";

export const GigsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 16px 0;
  width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1500px) {
    width: 95%;
  }
`;

export const HeaderText = styled.p`
  color: ${({ small }) => (small ? "gray" : "black")};
  font-size: ${({ small }) => (small ? "18px" : "30px")};
  font-weight: ${({ small }) => (small ? 500 : 700)};
  margin: 0;
`;

export const SubHeaderText = styled.span`
  cursor: pointer; 
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FilterLabel = styled.span`
  color: gray;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
`;

export const FilterInput = styled.input`
  width: 5vw;
  min-width: 60px;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 5px;

  &:focus,
  &:active {
    border: 1px solid black;
    outline: none;
  }
`;

export const FilterButton = styled.button`
  background-color: green;
  color: white;
  padding: 6px 8px;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid green;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: lightgreen;
    border: 1px solid lightgreen;
  }
`;

export const SortingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const SortingLabel = styled.span`
  color: gray;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
`;

export const Dropdown = styled.div`
  border: 1.5px solid grey;
  border-radius: 5px;
  position: relative;
  user-select: none;
`;

export const DropdownTitle = styled.p`
  padding: 6px 16px;
  font-weight: 600;
  color: black;
  font-size: 17px;
  cursor: pointer;
  margin: 0;

  &:hover {
    border: 1px solid black;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  background-color: whitesmoke;
  border: 1px solid gray;
  border-radius: 5px;
  top: 40px;
  right: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
`;

export const DropdownItem = styled.p`
  width: 120px;
  border: none;
  font-weight: 500;
  font-size: 17px;
  color: rgb(81, 78, 78);
  padding: 6px 10px;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: grey;
  }
`;

export const DropdownDivider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const GigList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
