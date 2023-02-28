import React from "react";
import styled from "styled-components";

function CardDate({ date }) {
  return <StyledCardDate>{date}</StyledCardDate>;
}
const StyledCardDate = styled.p`
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-size: var(--fs-tiny);
`;
export default CardDate;
