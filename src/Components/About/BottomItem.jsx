import React from "react";
import { TiTick } from "react-icons/ti";
import styled from "styled-components";
import { flexCenter } from "../../Styles/mixins";

function BottomItem({ children }) {
  return (
    <StyledItem>
      <span>
        <TiTick />
        &nbsp;
      </span>
      {children}
    </StyledItem>
  );
}
const StyledItem = styled.div`
  padding: 3px 10px;

  letter-spacing: 3px;
  color: var(--text-color);
  display: flex;
  font-size: var(--fs-small);
  background-color: transparent;
  & span {
    ${flexCenter}
  }
`;

export default BottomItem;
