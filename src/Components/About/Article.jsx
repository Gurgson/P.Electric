import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { sectionPadding } from "../../Styles/mixins";
import Heading from "../General/Heading";

function Article({ data }) {
  console.log(
    data.isReversed
      ? {
          visible: { x: 0 },
          hidden: { x: -1 },
        }
      : {
          visible: { x: 0 },
          hidden: { x: 1 },
        }
  );
  return (
    <StlyledArticle
      as={motion.article}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: {
          scale: 1,
        },
        hidden: {
          scale: 0,
        },
      }}
    >
      <StyledAsideText>
        <Heading TextColor="--primary-color">{data.headingText}</Heading>
        {data.asideText}
      </StyledAsideText>
      <StyledSVGcontainer src={data.svg} alt="Element strony tytulowej" />
    </StlyledArticle>
  );
}
const StlyledArticle = styled.article`
  ${sectionPadding}
  width: 80%;
  display: flex;
  align-items: center;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 900px) {
    &,
    &:nth-child(2n) {
      flex-direction: column;
    }
  }
`;
const StyledSVGcontainer = styled.img`
  background-repeat: no-repeat;
  width: 40%;
  color: var(--primary-color);
  @media screen and (max-width: 900px) {
    & {
      width: 80%;
    }
  }
`;
const StyledAsideText = styled.aside`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: var(--fs-paragraph);
`;
export default Article;
