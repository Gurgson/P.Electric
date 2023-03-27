import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { boxShadow } from "../../Styles/mixins";
import Button from "./../General/Button";
import CardDate from "./CardDate";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardName from "./CardName";
import CardSubconductor from "./CardSubconductor";

function Card({ data, handleClick }) {
  return (
    <StyledCard>
      <CardImage src={data.folder + "/Cover.jpg"} />
      <CardName name={data.name} />
      <CardDate date={data.date} />
      <CardDescription description={data.description} />
      <CardSubconductor subcondactor={data.subcondactor} />

      <Button isTiny={true} onClick={() => handleClick()}>
        Zobacz zdjęcia
      </Button>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  border-radius: 2rem 0;
  background-color: var(--primary-color);
  color: var(--text-color);
  width: 35rem;
  padding: 30px 10px;
  justify-content: center;
  align-items: center;
  transition: 1s;
  position: relative;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 1rem;
  &:hover {
    transition: 1;

    ${boxShadow}
  }
`;
export default Card;
