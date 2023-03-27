import React, { useRef } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItem from "./NavItem";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import { backgroundNetworkSvg } from "../../Styles/mixins";
export const Header = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const navItems = ["O-Nas", "/Usługi", "/Realizacje", "/Kontakt"].map(
    (data, index) => (
      <NavItem destination={data} handleClick={showNavBar} key={index}>
        {data.replace("/", "").replace("-", " ")}
      </NavItem>
    )
  );
  return (
    <StyledHeader>
      <Link>
        <StyledLogo>P.Electric</StyledLogo>
      </Link>
      <nav ref={navRef}>
        {navItems}

        <NavButton className="nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </NavButton>
      </nav>
      <NavButton onClick={showNavBar}>
        <FaBars />
      </NavButton>
    </StyledHeader>
  );
};

const StyledLogo = styled.span`
  font-size: 3.2rem;
  font-weight: 1000;
  letter-spacing: 6px;
  color: var(--text-color);
`;
const StyledHeader = styled.header`
  display: flex;
  flex-wrap: nowrap;
  ${backgroundNetworkSvg}
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: 20px 40px;

  transition: 0.5s;
  top: 0;
  width: 100%;
  @media only screen and (max-width: 500px) {
    padding: 10px 20px;
  }
  @media only screen and (max-width: 800px) {
    & > nav {
      top: 0;
      left: 0;
      width: 100vw;
      padding: 10px;
      height: 100vh;
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: translateY(-1000px);
      background-color: var(--primary-color);
      ${backgroundNetworkSvg}
      z-index: 100;
      transition: 1s;

      & > button {
        position: absolute;
        right: 20px;
        top: 20px;
      }
      &.responsive_nav {
        transform: none;
      }
    }
  }
`;
