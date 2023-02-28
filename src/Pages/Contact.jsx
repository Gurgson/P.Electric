import React from "react";
import styled from "styled-components";
import Container from "../Components/Contact/Container";
import Heading from "./../Components/Heading";

function Contact() {
  return (
    <StyledContact>
      <Heading
        HeadingText={"Skontaktuj się z nami"}
        TextColor="--primary-color"
      />
      <Container />
    </StyledContact>
  );
}
const StyledContact = styled.section``;
export default Contact;
