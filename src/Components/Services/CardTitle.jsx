import React from "react";
import styled from "styled-components";

function CardTitle({ children }) {
  return <StyledTitle> {children}</StyledTitle>;
}
const StyledTitle = styled.p`
  color: var(--primary-color);
  font-size: var(--fs-paragraph);
  display: flex;
  inline-size: 80%;
  height: 100%;
`;
export default CardTitle;
