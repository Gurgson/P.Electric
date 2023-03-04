import React from "react";
import styled from "styled-components";
import BottomItem from "./BottomItem";

function Bottom({}) {
  return (
    <StyledAboutBottom>
      <BottomItem>Instalacje elektryczne</BottomItem>
      <BottomItem> Wykończenia</BottomItem>
      <BottomItem> Telekomunikacja przewodowa </BottomItem>
    </StyledAboutBottom>
  );
}
const StyledAboutBottom = styled.div`
  background-color: var(--primary-color);
  min-height: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
export default Bottom;
