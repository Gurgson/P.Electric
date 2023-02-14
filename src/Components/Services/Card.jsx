import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../Styles/mixins";
import CardIcon from "./CardIcon";
import CardTitle from "./CardTitle";

function Card({ cardProp }) {
  return (
    <StyledCard>
      <CardIcon> {cardProp.icon}</CardIcon>
      <CardTitle>{cardProp.title}</CardTitle>
    </StyledCard>
  );
}
const StyledCard = styled.div`
  padding: 20px;
  /* border: 1px solid rgb(0, 0, 0, 0.7); */
  display: flex;
  align-items: center;
  margin: 30px 30px;
  &:nth-child(2n) {
    margin-left: 15%;
  }
`;
export default Card;
