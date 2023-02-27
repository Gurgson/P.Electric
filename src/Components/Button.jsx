import React from "react";
import styled from "styled-components";
import { boxShadow } from "../Styles/mixins";

function Button({ isTiny = false, children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  font-size: var(--fs-small);
  cursor: pointer;
  background-color: var(--secondary-color);
  border-radius: 10px;
  color: var(--text-color);
  padding: 1rem 3.2rem;
  border-radius: 3.3rem;
  font-weight: 600;
  font-size: ${(props) =>
    props.isTiny ? "var(--fs-tiny)" : "var(--fs-description)"};

  margin-left: auto;
  margin-right: auto;
  &:hover {
    transform: translateY(-5px);
    ${boxShadow}
    transition: 1s;
  }
`;

export default Button;
