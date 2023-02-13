import React from "react";
import styled from "styled-components";

import Bottom from "../Components/About/Bottom";
import Top from "../Components/About/Top";

function About() {
  return (
    <StyledAbout id="About">
      <Top />

      <Bottom />
    </StyledAbout>
  );
}
const StyledAbout = styled.section``;

export default About;
