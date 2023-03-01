import React from "react";
import styled from "styled-components";
import { boxShadow } from "../../Styles/mixins";
import Button from "./../General/Button";
import CardDate from "./CardDate";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardName from "./CardName";
import CardSubconductor from "./CardSubconductor";

function Card({ data }) {
  return (
    <StyledCard>
      <CardImage src={data.cover} />
      <StyledRight>
        <CardName name={data.name} />
        <CardDate date={data.date} />
        <CardDescription description={data.description} />
        <CardSubconductor subcondactor={data.subcondactor} />
      </StyledRight>
      <Button isTiny={true} onClick={() => {}}>
        Zobacz zdjęcia
      </Button>
    </StyledCard>
  );
}
const StyledRight = styled.div`
  padding: 30px 10px;
  position: relative;
  height: 40vh;
`;

const StyledCard = styled.div`
  display: flex;
  background-color: var(--secondary-color);
  color: var(--text-color);
  width: 300px;

  transition: 1s;
  position: relative;
  flex-direction: column;
  padding-bottom: 20px;

  &:hover {
    ${boxShadow}
  }
`;
export default Card;
