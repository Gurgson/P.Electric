import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

function NavItem({ children, destination, handleClick }) {
  return (
    <StyledNavItem to={destination} onClick={() => handleClick()}>
      {children}
    </StyledNavItem>
  );
}
const StyledNavItem = styled(NavLink)`
  font-size: var(--fs-parapgraph);
  color: var(--text-color);
  font-weight: 600;
  margin: 0 20px;
  display: inline-block;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px var(--tetriary-color);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover,
  &.active {
    transform: translateY(-3px);
    transition-duration: 0.25s;
    &::after {
      transform: scaleX(1);
    }
  }
  @media only screen and (max-width: 800px) {
    & {
      height: 25px;
      margin: 10px;
    }
  }
`;

export default NavItem;
