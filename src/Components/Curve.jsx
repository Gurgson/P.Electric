import React from "react";
import styled from "styled-components";

function Curve() {
  return <StyledCurve />;
}
const StyledCurve = styled.div`
  position: absolute;
  height: 225px;
  bottom: 0;
  width: 100%;
  &::after {
    content: "";
    display: block;
    position: absolute;

    border-radius: 100% 50%;
    bottom: 0;
    width: 55%;
    height: 100%;
    background-color: var(--secondary-color);
    transform: translate(85%, 60%);
    z-index: 1;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--secondary-color);
    border-radius: 100% 50%;
    width: 65%;
    height: 100%;
    transform: translate(-4%, 40%);
  }
`;
export default Curve;
