import React from "react";
import styled from "styled-components";

function CardImage({ src }) {
  return <StyledImage src={src} alt="" />;
}
const StyledImage = styled.img`
  width: 35%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
export default CardImage;
