import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import CardIcon from "./CardIcon";
import CardTitle from "./CardTitle";
function Card({ cardProp }) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <StyledCard as={motion.div} variants={item}>
      <CardIcon> {cardProp.icon}</CardIcon>
      <CardTitle>{cardProp.title}</CardTitle>
    </StyledCard>
  );
}
const StyledCard = styled.div`
  display: flex;
  z-index: 2;
  flex: calc(33%);
  align-items: center;
  flex-direction: column;
  margin: 20px auto;

  @media screen and (max-width: 1200px) {
    flex: calc(50%);
  }
  @media screen and (max-width: 800px) {
    flex: calc(100%);
  }
`;
export default Card;
