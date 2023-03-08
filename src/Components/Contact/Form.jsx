import React from "react";
import styled from "styled-components";
import Heading from "../General/Heading";
import Button from "./../General/Button";

function Form() {
  return (
    <StyledForm action="mailto:https:pelectric.pl">
      <Heading isTiny={true} TextColor="--primary-color">
        Napisz bezpośrednio do P.Electric
      </Heading>
      <label>Twój E-Mail</label>
      <input type="text" name="mail" placeholder="adres@poczta.pl"></input>
      <label>Tytuł</label>
      <input placeholder="Temat" type="text" name="subject"></input>
      <label>Treść</label>
      <textarea name="body" placeholder="Witam, Piszę w sprawie..."></textarea>
      <Button>Wyślij mail</Button>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & label {
    font-weight: 800;
    letter-spacing: 3px;
  }
  & textarea {
    min-height: 50vh;
    margin-bottom: 5px;
  }
  & button {
    margin: 20px auto;
  }
`;
export default Form;
