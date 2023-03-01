import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/Bs";
import styled from "styled-components";

function SliderArrow({ direction, onClick, theme = "light" }) {
  return (
    <StyledArrow theme={theme} onClick={onClick}>
      {direction === "right" ? (
        <BsFillArrowRightCircleFill />
      ) : (
        <BsFillArrowLeftCircleFill />
      )}
    </StyledArrow>
  );
}
const StyledArrow = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  flex: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > svg {
    font-size: var(--fs-heading);
    color: ${(p) =>
      p.theme === "light" ? "var(--text-color)" : "var(-primary-color)"};
  }

  & > svg:hover {
    transition: 1s;
    color: var(--tetriary-color);
  }
`;

export default SliderArrow;
