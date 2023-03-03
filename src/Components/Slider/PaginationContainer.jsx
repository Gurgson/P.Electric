import React from "react";
import styled from "styled-components";
import PaginationItem from "./PaginationItem";

function PaginationContainer({ onClick, ids }) {
  const nodes = ids.map((x) => (
    <PaginationItem onClick={onClick} key={x} id={x} />
  ));
  return <StyledContainer>{nodes}</StyledContainer>;
}
const StyledContainer = styled.div`
  flex: 20%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default PaginationContainer;
