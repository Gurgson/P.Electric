import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Container from "../Components/Contact/Container";
import Section from "../Components/General/Section";
import Heading from "./../Components/General/Heading";

function Contact() {
  return (
    <StyledContact id="Kontakt">
      <Heading TextColor="--primary-color">Skontaktuj się z nami</Heading>
      <Container />
      <Heading TextColor="--primary-color" isTiny="true">
        Znajdziesz nas pod tym adresem
      </Heading>
      <motion.iframe
        as={motion.iframe}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: {
            scale: 1,
          },
          hidden: {
            scale: 0,
          },
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.338483298479!2d20.7569756519296!3d49.53476333641442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de1573d38c857%3A0x3d17ccab8ce75b88!2s335%2C%20Frycowa%20187%2C%2033-335%20Frycowa!5e0!3m2!1sen!2spl!4v1677882700127!5m2!1sen!2spl"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </StyledContact>
  );
}
const StyledContact = styled(Section)`
  & > iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 65%;
    @media screen and (max-width: 900px) {
      width: 90%;
    }
  }
`;
export default Contact;
