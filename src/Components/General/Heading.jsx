import React from "react";
import styled from "styled-components";

function Heading({ children, isTiny = false, TextColor = "--text-color" }) {
  return (
    <StyledHeader isTiny={isTiny} TextColor={TextColor}>
      {children}
    </StyledHeader>
  );
}
const StyledHeader = styled.h1`
  font-size: ${(props) =>
    props.isTiny ? "var(--fs-title)" : "var(--fs-heading)"};
  margin: 0px auto 50px auto;
  text-align: center;
  letter-spacing: 4px;
  color: var(${(props) => props.TextColor});
  font-weight: 1000;

  /* &::after {
    content: "";
    position: absolute;
    display: block;
    width: 50%;
    left: 0px;
    bottom: 5px;
    background-color: var(--secondary-color);
  } */
`;
export default Heading;
