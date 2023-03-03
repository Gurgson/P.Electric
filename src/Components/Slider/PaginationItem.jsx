import React from "react";
import styled from "styled-components";
import { boxShadow } from "../../Styles/mixins";

function PaginationItem({ onClick, id }) {
  (p) => console.log(p);
  return (
    <StyledItem
      onClick={() => {
        onClick(id);
      }}
    />
  );
}
const StyledItem = styled.div`
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.8;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 5px;
  background-color: var(--text-color);
  &:hover {
    transition: 1s;
    border: 1px solid var(--tetriary-color);
    ${boxShadow}
  }
`;
export default PaginationItem;
