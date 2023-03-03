import React, { useRef, useState } from "react";
import styled from "styled-components";
import PaginationContainer from "./PaginationContainer";
import SliderArrow from "./SliderArrow";
import SliderItem from "./SliderItem";
import SliderSideItem from "./SliderSideItem";

function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const length = items.length;
  const goToPrevious = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };
  const goToNext = () => {
    if (currentIndex === length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };
  const setActive = (sldierId) => {
    setCurrentIndex(sldierId);
  };
  return (
    <StyledContainer>
      <SliderArrow direction={"left"} onClick={goToPrevious} />
      <StyledSliderContainer>
        <SliderSideItem
          direction={"left"}
          onClick={() => {
            goToPrevious();
          }}
        >
          {items[currentIndex - 1]}
        </SliderSideItem>
        <SliderItem children={items[currentIndex]}></SliderItem>
        <SliderSideItem
          direction={"right"}
          onClick={() => {
            goToNext();
          }}
        >
          {items[currentIndex + 1] > length - 1
            ? items[0]
            : items[currentIndex + 1]}
        </SliderSideItem>
      </StyledSliderContainer>
      <SliderArrow direction={"right"} onClick={goToNext} />
      <PaginationContainer
        onClick={setActive}
        ids={items.map((x, index) => index)}
      />
    </StyledContainer>
  );
}
const StyledSliderContainer = styled.div`
  flex: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  & > div {
    flex: 33%;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* padding: 30px; */
`;
export default Slider;
