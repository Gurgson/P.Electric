import React from "react";
import styled from "styled-components";
import ContactData from "./ContactData";
import Form from "./form";

function Container() {
  return (
    <StyledContainer>
      <ContactData />
      <Form />
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--primary-color);
  & > div,
  form {
    width: 50%;
    padding: 2rem 4rem;
  }
`;
export default Container;
