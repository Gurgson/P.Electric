import React from "react";
import styled from "styled-components";

function CardImage({ src }) {
  return <StyledImage src={src} alt="" />;
}
const StyledImage = styled.img`
  height: 20rem;
`;
export default CardImage;
