import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/apiRequest";
import {
  NavbarContainer,
  MainContainer,
  Logo,
  Actions,
  ActionButton,
  JoinButton,
  User,
  UserImage,
  Options,
  OptionLink,
  Hr,
  Line,
  MenuContainer,
  MenuLink,
} from "./Navbar.styles"; // Import styled components from separate file

const Navbar = () => {
  const [scrollFlag, setScrollFlag] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const isActive = () => {
    window.scrollY > 0 ? setScrollFlag(true) : setScrollFlag(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // Close dropdown if clicking outside user menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".user")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <NavbarContainer active={scrollFlag || pathname !== "/"}>
      <MainContainer>
        <Logo>
          <Link className="link" to="/">
            <span>Gignest</span>
            <span>
              <img className="logo-image" src="assets/logo.svg" alt="logo" />
            </span>
          </Link>
        </Logo>

        <Actions>
          {/* Added 'to' props for all Links */}
          <Link to="/business" className="link">
            <ActionButton>Business</ActionButton>
          </Link>

          <Link to="/gigs" className="link">
            <ActionButton>Explore</ActionButton>
          </Link>

          {!currentUser?.body?.isSeller && (
            <Link to="/become-seller" className="link">
              <ActionButton>Become a seller</ActionButton>
            </Link>
          )}

          {!currentUser && (
            <Link to="/signin" className="link">
              <ActionButton>Sign In</ActionButton>
            </Link>
          )}

          {!currentUser && (
            <Link to="/signup" className="link">
              <JoinButton>Join</JoinButton>
            </Link>
          )}

          {currentUser && (
            <User
              className="user"
              onClick={() => setOpen(!open)}
              aria-haspopup="true"
              aria-expanded={open ? "true" : "false"}
            >
              <UserImage
                src={currentUser.body.img || "assets/avatar.png"}
                alt="user avatar"
              />
              <span>{currentUser.body.username}</span>

              {open && (
                <Options>
                  {currentUser.body.isSeller && (
                    <>
                      <OptionLink to="/mygigs">My Gigs</OptionLink>
                      <Hr />
                      <OptionLink to="/add">Add New Gig</OptionLink>
                      <Hr />
                    </>
                  )}
                  <OptionLink to="/orders">Orders</OptionLink>
                  <Hr />
                  <OptionLink to="/messages">Messages</OptionLink>
                  <Hr />
                  <OptionLink to="/" onClick={handleLogout}>
                    Log out
                  </OptionLink>
                </Options>
              )}
            </User>
          )}
        </Actions>
      </MainContainer>

      {(scrollFlag || pathname !== "/") && (
        <>
          <Line />
          <MenuContainer>
            <MenuLink to="/">AI</MenuLink>
            <MenuLink to="/">Engineering</MenuLink>
            <MenuLink to="/">Web Designing</MenuLink>
          </MenuContainer>
          <Line />
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
