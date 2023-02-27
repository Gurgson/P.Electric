import React from "react";
import styled from "styled-components";
function CardIcon({ children }) {
  return <StyledIcon>{children}</StyledIcon>;
}
const StyledIcon = styled.div`
  --border-radius: 5px;
  padding: 2rem;
  border-radius: var(--border-radius);
  border-color: var(--primary-color);
  background-color: var(--primary-color);
  color: var(--text-color);
  font-size: var(--fs-title);
  position: relative;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  z-index: 1;

  &:hover {
    color: var(--tetriary-color);
    transition: 2s;
  }
  & > * {
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;
export default CardIcon;
