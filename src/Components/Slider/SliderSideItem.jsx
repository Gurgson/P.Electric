import React from "react";
import styled from "styled-components";
import SliderItem from "./SliderItem";
function SliderSideItem({ onClick = () => {}, children, direction }) {
  return (
    <StyledSideItem onClick={onClick}>
      <SliderItem direction={direction}>{children}</SliderItem>
    </StyledSideItem>
  );
}
const StyledSideItem = styled.div`
  perspective: 800px;
  position: relative;
  z-index: 1;
  opacity: 0.5;
  cursor: pointer;
  & > div::after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 5;
    padding: -30px;
  }
`;
export default SliderSideItem;
