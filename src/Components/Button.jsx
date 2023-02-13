import React from "react";
import styled from "styled-components";

function Button({ children, onClick = "" }) {
  return <StyledButton>{children}</StyledButton>;
}
const StyledButton = styled.button`
  font-size: var(--fs-small);
  cursor: pointer;
  background-color: var(--secondary-color);
  border-radius: 10px;
  color: var(--text-color);
  padding: 10px 20px;
  &:hover {
    border-color: var(--tetriary-color);
    border-width: 3px;
    transform: translateY(5px);
    transition: 1s;
  }
`;

export default Button;
