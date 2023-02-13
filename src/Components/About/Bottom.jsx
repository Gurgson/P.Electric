import React from "react";
import styled from "styled-components";
import BottomItem from "./BottomItem";

function Bottom({}) {
  return (
    <StyledAboutBottom>
      <BottomItem> Dobra cena</BottomItem>
      <BottomItem> Komunikacja</BottomItem>
      <BottomItem> Realizacje</BottomItem>
      <BottomItem> Jakieś </BottomItem>
      <BottomItem> Słowa marketingowe słowka </BottomItem>
    </StyledAboutBottom>
  );
}
const StyledAboutBottom = styled.div`
  background-color: var(--primary-color);
  min-height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    /* flex-direction: column;
    fle */
    flex-wrap: wrap;
  }
`;
export default Bottom;
