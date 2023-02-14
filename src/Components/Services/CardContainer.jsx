import React from "react";
import styled from "styled-components";
import { ServicesData } from "../../Data/ServicesData";
import Card from "./Card";

function CardContainer() {
  const data = ServicesData;
  const nodes = data.map((x) => {
    return <Card cardProp={{ title: x.description, icon: x.icon }} />;
  });
  return <StyledCardContainer>{nodes}</StyledCardContainer>;
}
const StyledCardContainer = styled.div`
  width: 85%;
  align-items: center;
  margin: 10px auto;
`;
export default CardContainer;
