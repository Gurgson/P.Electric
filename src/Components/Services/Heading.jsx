import React from "react";
import styled from "styled-components";

function Heading() {
  return <styledHeader>Co wykonujemy</styledHeader>;
}
const styledHeader = styled.h1`
  font-size: var(--fs-heading);
  margin: 20px auto;
`;
export default Heading;
