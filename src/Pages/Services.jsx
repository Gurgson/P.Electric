import React from "react";
import styled from "styled-components";
import CardContainer from "../Components/Services/CardContainer";
import { sectionPadding } from "../Styles/mixins";
import Heading from "./../Components/General/Heading";

function Services() {
  return (
    <StyledServicePage id="Uslugi">
      <Heading TextColor="--primary-color">Nasze usługi</Heading>
      <CardContainer />
    </StyledServicePage>
  );
}
const StyledServicePage = styled.section`
  ${sectionPadding};
`;

export default Services;
