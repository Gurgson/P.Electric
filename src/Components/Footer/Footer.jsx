import React from "react";
import styled from "styled-components";
import {
  backgroundNetworkSvg,
  flexCenter,
  sectionPadding,
} from "../../Styles/mixins";

function Footer() {
  return (
    <SyledFooter>
      P.Electric Przemysław Baran &copy; Działamy razem od 2021
    </SyledFooter>
  );
}
const SyledFooter = styled.footer`
  ${sectionPadding}
  ${flexCenter}
  ${backgroundNetworkSvg}
  color: var(--text-color);
  background-color: var(--primary-color);
`;
export default Footer;
