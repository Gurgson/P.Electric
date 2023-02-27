import React from "react";
import styled from "styled-components";

function CardDescription({ description }) {
  return <StyledCardDesc>{description}</StyledCardDesc>;
}
const StyledCardDesc = styled.p`
  font-size: var(--fs-description);
`;
export default CardDescription;
