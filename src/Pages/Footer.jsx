import React from "react";
import styled from "styled-components";
import Heading from "../Components/General/Heading";
import { sectionPadding } from "../Styles/mixins";

function Footer() {
  return (
    <SyledFooter>
      {/* <Heading isTiny={true}>Firma P.Electric Przemysław Baran &copy </Heading> */}
    </SyledFooter>
  );
}
const SyledFooter = styled.footer`
  ${sectionPadding}
  background-color: var(--primary-color);
`;
export default Footer;
