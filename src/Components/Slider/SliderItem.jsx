import React from "react";

function SliderItem({ children }) {
  return <StyledSliderItem>{children}</StyledSliderItem>;
}
const StyledSliderItem = styled.div`
  width: 60%;
  max-width: 60%;
`;
export default SliderItem;
