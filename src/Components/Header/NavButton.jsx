import React from "react";
import styled from "styled-components";

function NavButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  font-size: 3.2rem;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-color);
  display: none;
  @media only screen and (max-width: 800px) {
    & {
      display: flex;
    }
  }
`;

export default NavButton;
