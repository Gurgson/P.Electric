import React from "react";
import styled from "styled-components";

function CardTitle({ children }) {
  return <StyledTitle> {children}</StyledTitle>;
}
const StyledTitle = styled.p`
  color: var(--primary-color);
  font-size: var(--fs-paragraph);
  font-weight: 700;
  inline-size: 80%;
  height: 100%;
  margin-top: 40px;
  text-align: center;
`;
export default CardTitle;
