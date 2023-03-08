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
    width: 35%;
    padding: 3rem 5rem;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  & > div,
  form {
    width: 100%;
    padding: 3rem;
  }
`;
export default Container;
