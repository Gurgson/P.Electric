import React from "react";
import styled from "styled-components";
import { ServicesData } from "../../Data/ServicesData";
import Card from "./Card";

function CardContainer() {
  const data = ServicesData;
  const nodes = data.map((x, index) => {
    return (
      <Card key={index} cardProp={{ title: x.description, icon: x.icon }} />
    );
  });
  return <StyledCardContainer>{nodes}</StyledCardContainer>;
}
const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* @media screen and (max-width: 800) {
    flex-direction: column;
  } */
`;
export default CardContainer;
