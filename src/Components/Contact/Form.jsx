import React from "react";
import styled from "styled-components";
import Button from "./../Button";

function Form() {
  return (
    <StyledForm>
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
