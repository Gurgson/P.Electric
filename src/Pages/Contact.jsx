import React from "react";
import styled from "styled-components";
import Container from "../Components/Contact/Container";
import { sectionPadding } from "../Styles/mixins";
import Heading from "./../Components/General/Heading";

function Contact() {
  return (
    <StyledContact id="Kontakt">
      <Heading TextColor="--primary-color">Skontaktuj się z nami</Heading>
      <Container />
    </StyledContact>
  );
}
const StyledContact = styled.section`
  ${sectionPadding};
`;
export default Contact;
