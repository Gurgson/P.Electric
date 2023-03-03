import React from "react";
import styled from "styled-components";
import { sectionPadding } from "../../Styles/mixins";

function Footer() {
  return <SyledFooter>header</SyledFooter>;
}
const SyledFooter = styled.footer`
  ${sectionPadding}
  background-color: var(--primary-color);
`;
export default Footer;
