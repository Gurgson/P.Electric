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
  min-height: 20rem;
  overflow-y: auto;
  max-height: 2.5rem;
  width: 95%;
`;
export default CardDescription;
