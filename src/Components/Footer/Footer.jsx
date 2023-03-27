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
      <span> P.Electric Przemysław Baran &copy;</span>
      <span>Działamy razem od 2021</span>
    </SyledFooter>
  );
}
const SyledFooter = styled.footer`
  ${sectionPadding}
  ${flexCenter}
  ${backgroundNetworkSvg}
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  color: var(--text-color);
  background-color: var(--primary-color);
`;
export default Footer;
