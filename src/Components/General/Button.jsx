import React from "react";
import styled from "styled-components";
import { boxShadow } from "./../../Styles/mixins";

function Button({ isTiny = false, children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  font-size: var(--fs-small);
  cursor: pointer;
  background-color: var(--secondary-color);
  color: var(--text-color);
  padding: 1rem 3.2rem;
  border: none;
  border-radius: 1rem;
  font-weight: 600;
  margin: 0 auto;
  opacity: 0.9;
  font-size: ${(props) =>
    props.isTiny ? "var(--fs-tiny)" : "var(--fs-description)"};
  &:hover {
    transform: translateY(-5px);
    ${boxShadow}
    transition: 1s;
  }
`;

export default Button;
