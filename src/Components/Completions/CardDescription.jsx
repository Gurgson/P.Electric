import React from "react";
import styled from "styled-components";

function CardDescription({ description }) {
  return <StyledCardDesc>{description}</StyledCardDesc>;
}
const StyledCardDesc = styled.span`
  font-size: var(--fs-description);
  height: auto;
`;
export default CardDescription;
