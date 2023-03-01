import React from "react";
import styled from "styled-components";

function CardDate({ date }) {
  return <StyledCardDate>{date}</StyledCardDate>;
}
const StyledCardDate = styled.p`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: var(--fs-tiny);
  opacity: 0.7;
`;
export default CardDate;
