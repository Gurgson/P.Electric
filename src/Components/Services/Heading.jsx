import React from "react";
import styled from "styled-components";

function Heading() {
  return <StyledHeader>Zakres usług</StyledHeader>;
}
const StyledHeader = styled.h1`
  font-size: var(--fs-heading);
  margin: 20px auto;
  text-align: center;
  letter-spacing: 4px;
  color: var(--primary-color);

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 50%;
    left: 0px;
    bottom: 5px;
    background-color: var(--secondary-color);
  }
`;
export default Heading;
