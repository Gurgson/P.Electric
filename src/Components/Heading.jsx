import React from "react";
import styled from "styled-components";

function Heading({ HeadingText, TextColor = "--text-color" }) {
  return <StyledHeader TextColor={TextColor}>{HeadingText}</StyledHeader>;
}
const StyledHeader = styled.h1`
  font-size: var(--fs-heading);
  margin: 20px auto;
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
