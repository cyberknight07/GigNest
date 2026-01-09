import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  background-color: darkgreen;
  font-family: "Montserrat", sans-serif;
  position: sticky;
  top: 0;
  transition: 0.5ms all ease;
  z-index: 999;

  ${(props) =>
    props.active &&
    css`
      background-color: white;
      color: black;
    `}
`;

export const MainContainer = styled.div`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 34px;
  font-weight: bold;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
  }

  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    gap: 8px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 24px;
  font-weight: 500;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
`;

export const ActionButton = styled.span`
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: darkblue;
    font-weight: 600;
  }
`;

export const JoinButton = styled.button`
  display: flex;
  font-family: "Montserrat", sans-serif;
  align-items: center;
  font-weight: 600;
  padding: 4px 8px;
  color: lightgreen;
  background-color: transparent;
  border: 1px solid lightgreen;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    background-color: #1e7a1e; /* a nicer green */
    border-color: #1e7a1e;
    color: white;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
  user-select: none;
  &:hover {
    color: darkblue;
    font-weight: 600;
  }
`;

export const UserImage = styled.img`
  width: 25px;
  height: 25px;
  padding: 4px;
  border: 1px solid lightgrey;
  border-radius: 50%;
  object-fit: cover;
`;

export const Options = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  background-color: white;
  border: 1px solid rgb(247, 247, 247);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 200px;
  font-weight: 300;
  color: grey;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const OptionLink = styled(Link)`
  padding: 10px;
  color: grey;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  height: 0;
  border: 0.5px solid rgb(247, 247, 247);
  margin: 0;
`;

export const Line = styled.hr`
  width: 98vw;
  height: 0;
  border: 0.5px solid lightgrey;
  margin: 0;
`;

export const MenuContainer = styled.div`
  width: 95vw;
  padding: 8px 0;
  display: flex;
  font-weight: 300;
  justify-content: space-between;
  color: grey;
`;

export const MenuLink = styled(Link)`
  color: grey;
  font-weight: 300;
  text-decoration: none;

  &:hover {
    color: darkgreen;
  }
`;
