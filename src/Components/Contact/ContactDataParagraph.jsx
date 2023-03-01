import React from "react";
import styled from "styled-components";

function ContactDataParagraph({ data, fontSize }) {
  return (
    <StyledParagraph>
      <span>{data.icon || data.title} </span>
      {data.desc ? <span>{data.desc}</span> : ""}
    </StyledParagraph>
  );
}
const StyledParagraph = styled.p`
  display: flex;
  width: 80%;
  font-size: var(--description);
  font-weight: 600;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;
export default ContactDataParagraph;
