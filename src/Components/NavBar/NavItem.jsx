import React from "react";
import styled from "styled-components";

function NavItem({ children, to }) {
  return <StyledNavItem href={to}> {children} </StyledNavItem>;
}
const StyledNavItem = styled.a`
  font-size: 1.6rem;
  color: var(--text-color);
  font-weight: 600;
  margin: 20px;
  height: 100%;
  display: inline-block;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px var(--tetriary-color);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover {
    transform: translateY(-3px);

    transition-duration: 0.25s;
  }
  @media only screen and (max-width: 800px) {
    & {
      height: 25px;
    }
  }
`;
export default NavItem;
