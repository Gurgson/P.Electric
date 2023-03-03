import React from "react";
import styled from "styled-components";

function SliderItem({ direction, children }) {
  return <StyledSliderItem direction={direction}>{children}</StyledSliderItem>;
}
const StyledSliderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(p) => {
    if (p.direction === "left") {
      return "rotateY(30deg)";
    } else if (p.direction === "right") {
      return "rotateY(-30deg)";
    }
  }};
`;
export default SliderItem;
