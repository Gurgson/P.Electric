import React from "react";
import styled from "styled-components";

function CardSubconductor({ subcondactor }) {
  return <StyledSubconductor>Podwykonastwo: {subcondactor}</StyledSubconductor>;
}
const StyledSubconductor = styled.p`
  /* font-size: var(--fs-tiny);
  opacity: 0.9;
  font-weight: 800; */
`;

export default CardSubconductor;
