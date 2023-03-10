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
  color: var(--primary-color);
  & > div,
  form {
    width: 50%;
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  & > div,
  form {
    width: 100%;
    padding: 2rem;
  }
`;
export default Container;
