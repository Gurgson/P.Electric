import React from "react";
import styled from "styled-components";
import CardContainer from "../Components/Services/CardContainer";
import Heading from "../Components/Services/Heading";

function Services() {
  return (
    <StyledServicePage id="Services">
      <Heading />
      <CardContainer />
    </StyledServicePage>
  );
}
const StyledServicePage = styled.div`
  margin-top: 40px;
`;

export default Services;
