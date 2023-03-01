import React from "react";
import styled from "styled-components";

import Bottom from "../Components/About/Bottom";
import Top from "../Components/About/Top";
import { sectionPadding } from "../Styles/mixins";

function About() {
  return (
    <StyledAbout id="O-Nas">
      <Top />
      <Bottom />
    </StyledAbout>
  );
}
const StyledAbout = styled.section`
  ${sectionPadding}
  padding-top: 0;
`;

export default About;
