import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  height: 80vh;
  background-color: darkgreen;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap:20px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 5vh;

  i {
    font-style: italic;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;

export const SearchText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
    margin: 10px;
    object-fit: cover;
  }

  input {
    border: none;
    outline: none;
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: lightgreen;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Popular = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 14px;

  span {
    font-weight: 500;
  }

  button {
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
`;

export const Right = styled.div`
  flex: 1;
  height: 80vh;
  display: flex;
  justify-content: end;

  img {
    height: 100%;
    object-fit: contain;
  }
`;
