import React from "react";
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
            instalacje zarówno wewnętrzne, jak i zewnętrzne Oferujemy również
            doradztwo techniczne, obsługę techniczną budynków (w formie
            doraźnego utrzymania ruchu bądź długoterminowej współpracy) oraz
            wykonanie dokumentacji istniejących instalacji.
          </p>
        </h2>
        <a href="#Uslugi">
          <Button onClick={() => {}}>Zobacz naszą ofertę</Button>
        </a>
      </span>
    </StyledTopDiv>
  );
}

const StyledTopDiv = styled.div`
  min-height: 80vh;
  background-image: url("about.jpg");
  min-width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;
  &::before {
    z-index: 1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: b;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.55);
  }
  & span {
    opacity: 0.9;
    position: absolute;
    z-index: 5;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 75px 0;
    align-items: center;
    color: var(--text-color);
    @media only screen and (max-width: 1024px) {
      width: 80%;
    }
    @media only screen and (max-width: 850px) {
      width: 100%;
      background-position: center;
    }
    & h1 {
      text-align: center;
      margin: 25px auto;
      width: 70%;
      font-size: var(--fs-heading);
    }
    & h2 {
      text-align: justify;
      font-size: var(--fs-paragraph);
      margin: 20px auto;
      width: 70%;
      @media only screen and (max-width: 500px) {
        width: 90%;
      }
    }
  }
`;
export default Top;
