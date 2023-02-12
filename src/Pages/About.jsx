import React from "react";
import styled from "styled-components";
import Curve from "../Components/Curve";
import { flexCenter } from "../Styles/mixins";

function About() {
  return (
    <StyledAbout id="About">
      <Top>
        <h1>O P.Electric</h1>
        <h2>
          Jakieś motto firmy, którkie zdanie mówiące o was, co robicie albo jaki
          jest wasz cel, podsumowanie działalności czy coś takiego. Jakaś
          wiadomość do widza czy coś takiego. Jeślu masz inną wizję poddaj ją.
          Tekst taki dałem żebyś widział jak lezy na stronie.
        </h2>
      </Top>
    </StyledAbout>
  );
}
const StyledAbout = styled.section`
  ${flexCenter}
  flex-direction: column;
`;
const Top = styled.div`
  width: 100%;
  min-height: 90vh;
  position: relative;
  color: var(--text-color);
  align-items: center;
  margin: 0 auto;
  align-items: center;
  background-image: url("/public/about.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(20, 20, 20, 0.6);
    height: 100%;
  }
  & h1 {
    position: absolute;
    top: 20%;
    left: 18%;
    font-size: var(--fs-heading);
    &::before {
      content: "\t";
    }
  }

  & h2 {
    font-size: var(--fs-subheading);
    width: 500px;
    position: absolute;
    bottom: 18%;
    right: 10%;
  }
`;
export default About;
