import React, { useRef, useState } from "react";
import styled from "styled-components";
import SliderArrow from "./SliderArrow";
import SliderItem from "./SliderItem";
import SliderSideItem from "./SliderSideItem";

function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const length = items.length;
  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLast = currentIndex === length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const setActive = (sldierId) => {};
  return (
    <StyledContainer>
      <SliderArrow direction={"left"} onClick={goToPrevious} />
      <StyledSliderContainer>
        <SliderSideItem direction={"left"}>
          {items[currentIndex - 1]}{" "}
        </SliderSideItem>
        <SliderItem children={items[currentIndex]}></SliderItem>
        <SliderSideItem direction={"right"}>
          {items[currentIndex + 1]}{" "}
        </SliderSideItem>
      </StyledSliderContainer>
      <SliderArrow direction={"right"} onClick={goToNext} />
    </StyledContainer>
  );
}
const StyledSliderContainer = styled.div`
  flex: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Slider;
