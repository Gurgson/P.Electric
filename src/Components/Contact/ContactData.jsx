import React from "react";
import { HiPhone, HiMail, HiHome } from "react-icons/Hi";
import styled from "styled-components";
import Heading from "../General/Heading";
import ContactDataParagraph from "./ContactDataParagraph";

function ContactData() {
  const data = [
    {
      title: "REGON",
      desc: "388063333",
    },
    {
      title: "NIP",
      desc: "9452241675",
    },
    {
      icon: <HiMail fontSize={"3rem"} />,
      desc: "biuro.pelectric@gmail.com",
    },
    {
      icon: <HiHome fontSize={"3rem"} />,
      desc: "Frycowa 187, 33-335 Frycowa",
    },

    {
      icon: "",
      desc: "+48 731 957 949",
    },
    {
      icon: <HiPhone fontSize={"3rem"} />,
      desc: "+48 696 330 973",
    },
    {
      icon: "",
      desc: "+48 519 356 570",
    },
  ];
  return (
    <StyledContactData>
      <Heading TextColor="--primary-color" isTiny={true}>
        Dane kontaktowe:
      </Heading>
      <ContactDataParagraph data={data[0]} />
      <ContactDataParagraph data={data[1]} />
      <ContactDataParagraph data={data[2]} />
      <ContactDataParagraph data={data[3]} />
      <br />
      <a href={`tel:${data[4].desc}`}>
        <ContactDataParagraph data={data[4]} />
      </a>
      <a href={`tel:${data[5].desc}`}>
        <ContactDataParagraph data={data[5]} />
      </a>
      <a href={`tel:${data[6].desc}`}>
        <ContactDataParagraph data={data[6]} />
      </a>
    </StyledContactData>
  );
}
const StyledContactData = styled.div``;
export default ContactData;
