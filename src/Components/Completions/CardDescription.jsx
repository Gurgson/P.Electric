import React from "react";
import styled from "styled-components";

function CardDescription({ description }) {
  const nodes = description.map((x, index) => {
    return <p key={index}>{x}</p>;
  });
  return <StyledCardDesc>{nodes}</StyledCardDesc>;
}
const StyledCardDesc = styled.span`
  font-size: var(--fs-description);
  overflow-y: auto;
  max-height: 250px;
`;
export default CardDescription;
