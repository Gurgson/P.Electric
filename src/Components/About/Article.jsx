import React from "react";
import styled from "styled-components";
import { boxShadow, sectionPadding } from "../../Styles/mixins";
import Heading from "../General/Heading";

function Article({ data }) {
  return (
    <StlyledArticle>
      <StyledAsideText>
        <Heading TextColor="--primary-color">{data.headingText}</Heading>
        {data.asideText}
      </StyledAsideText>
      <StyledSVGcontainer src={data.svg} />
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
