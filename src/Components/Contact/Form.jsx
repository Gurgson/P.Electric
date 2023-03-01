import React from "react";
import styled from "styled-components";
import Heading from "../General/Heading";
import Button from "./../General/Button";

function Form() {
  return (
    <StyledForm>
      <Heading isTiny={true} TextColor="--primary-color">
        Napisz bezpośrednio do P.Electric
      </Heading>
      <label>Twój E-Mail</label>
      <input type="text" placeholder="przykład@poczta.pl"></input>
      <label>Tytuł</label>
      <input></input>
      <label>Treść</label>
      <textarea></textarea>
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
