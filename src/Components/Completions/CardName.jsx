import React from "react";
import styled from "styled-components";

function CardName({ name }) {
  return <StyledName>{name}</StyledName>;
}
const StyledName = styled.p`
  font-size: var(--fs-paragraph);
  margin: 0.5rem 0;
  letter-spacing: 3px;
`;
export default CardName;
