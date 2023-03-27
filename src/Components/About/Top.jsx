import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./../General/Button";

function Top() {
  return (
    <StyledTopDiv>
      <span>
        <h1>O nas</h1>
        <h2>
          <p>
            Nasza firma oferuje Państwu kompleksowe usługi wykonawstwa
            instalacji elektrycznych oraz teletechnicznych. Wykonujemy
            instalacje zarówno wewnętrzne, jak i zewnętrzne. Posiadamy
            kierunkowe wykształcenie wyższe, wieloletnie doświadczenie oraz
            uprawnienia eksploatacyjne, dozorowe oraz pomiarowe.
          </p>
        </h2>
        <Link to="/Usługi">
          <Button onClick={() => {}}>Zobacz naszą ofertę</Button>
        </Link>
      </span>
    </StyledTopDiv>
  );
}

const StyledTopDiv = styled.div`
  min-height: 95vh;
  background-image: url("about.jpg");
  min-width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  &::before {
    z-index: 1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.55);
  }
  & span {
    opacity: 0.9;
    position: absolute;
    z-index: 5;
    width: 40%;
    height: 100%;
    flex-direction: column;
    padding: 75px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    & > a {
      margin-top: 2rem;
    }
    @media only screen and (max-width: 1024px) {
      width: 90%;
    }
    @media only screen and (max-width: 850px) {
      background-position: center;
    }
    @media only screen and (max-width: 500px) {
      width: 100%;
    }
    & h1 {
      text-align: center;

      width: 70%;
      font-size: var(--fs-heading);
    }
    & h2 {
      text-align: justify;
      font-size: var(--fs-paragraph);
      width: 70%;

      @media only screen and (max-width: 500px) {
        width: 80%;
        margin: 1.5prem auto;
      }
    }
  }
`;
export default Top;
