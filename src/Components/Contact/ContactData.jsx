import React from "react";
import { HiPhone, HiMail } from "react-icons/Hi";
import styled from "styled-components";
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
  ];
  return (
    <StyledContactData>
      <ContactDataParagraph data={data[0]} />
      <ContactDataParagraph data={data[1]} />
      <ContactDataParagraph size={"--fs-title"} data={data[2]} />
      <PhoneContainer>
        <p></p>

        <p>
          <a href="tel:+48">+48 731 957 949</a>
        </p>
        <p>
          <a href="tel:+48">+48 696 330 973</a>
        </p>
        <p>
          <a href="tel:+48">+48 519 356 570</a>
        </p>
      </PhoneContainer>
    </StyledContactData>
  );
}
const StyledContactData = styled.div``;
const PhoneContainer = styled.div`
  text-align: center;
`;
export default ContactData;
