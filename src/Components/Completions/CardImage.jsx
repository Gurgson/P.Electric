import React from "react";
import styled from "styled-components";

function CardImage({ src }) {
  return <StyledImage src={src} alt={"Zdjęcie całościowe realizacji"} />;
}
const StyledImage = styled.img`
  height: 20rem;
  width: 95%;
  &:hover {
    transition: 1s;
    scale: 1.05;
  }
`;
export default CardImage;
