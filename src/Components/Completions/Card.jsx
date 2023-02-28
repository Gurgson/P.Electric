import React from "react";
import styled from "styled-components";
import { boxShadow } from "../../Styles/mixins";
import Button from "../button";
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
        <Button isTiny={true} onClick={() => {}}>
          Zobacz zdjęcia
        </Button>
      </StyledRight>
    </StyledCard>
  );
}
const StyledRight = styled.div`
  padding: 20px;
  position: relative;
  & > button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > :last-child {
    margin-top: 15px;
  }
  @media only screen and (max-width: 700px) {
    /* width: 100%; */
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  display: flex;
  background-color: var(--secondary-color);
  color: var(--text-color);
  min-height: 40vh;
  width: 800px;
  border-radius: 3rem;
  transition: 1s;
  position: relative;

  &:hover {
    ${boxShadow}
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export default Card;
