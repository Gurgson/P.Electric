import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ServicesData } from "../../Data/ServicesData";
import Card from "./Card";
function CardContainer() {
  const containerAimation = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.125,
      },
    },
  };

  const data = ServicesData;
  const nodes = data.map((x, index) => (
    <Card key={index} cardProp={{ title: x.description, icon: x.icon }} />
  ));

  return (
    <StyledCardContainer
      as={motion.div}
      variants={containerAimation}
      initial="hidden"
      animate="visible"
    >
      {nodes}
    </StyledCardContainer>
  );
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
