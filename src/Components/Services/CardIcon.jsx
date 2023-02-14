import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../Styles/mixins";
``;
function CardIcon({ children }) {
  return <StyledIcon>{children}</StyledIcon>;
}
const StyledIcon = styled.div`
  padding: 2rem;
  border-radius: 5px;
  border-color: var(--primary-color);
  background-color: var(--primary-color);
  color: var(--text-color);
  font-size: var(--fs-title);
  margin-right: 3.5rem;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari and Chrome */
  & > * {
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg); /* IE 9 */
    -webkit-transform: rotate(-45deg); /* Safari and Chrome */
  }
`;
export default CardIcon;
