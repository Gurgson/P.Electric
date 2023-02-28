import React, { useRef, useState } from "react";
import styled from "styled-components";
import SliderArrow from "./SliderArrow";

function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLast = currentIndex === items.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <StyledSliderContainer>
      <SliderArrow direction={"left"} onClick={goToPrevious} />
      <SliderItem children={items[currentIndex]}></SliderItem>
      <SliderArrow direction={"right"} onClick={goToNext} />
    </StyledSliderContainer>
  );
}
const StyledSliderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderItem = styled.div``;
export default Slider;
