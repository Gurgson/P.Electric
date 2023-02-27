import React from "react";
import styled from "styled-components";
import CardContainer from "../Components/Services/CardContainer";
import Heading from "../Components/Heading";

function Services() {
  return (
    <StyledServicePage id="Uslugi">
      <Heading HeadingText="Nasze usługi" TextColor="--primary-color" />
      <CardContainer />
    </StyledServicePage>
  );
}
const StyledServicePage = styled.section`
  margin-top: 40px;
`;

export default Services;
