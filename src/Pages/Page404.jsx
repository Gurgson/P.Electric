import React from "react";
import styled from "styled-components";
import Heading from "../Components/General/Heading";
import { flexCenter } from "../Styles/mixins";

function Page404() {
  return (
    <StyledDiv>
      <Heading TextColor="--primary-color">
        Nie posiadamy takie podstrony, użyj nawigacji żeby powrócic na naszą
        stronę
      </Heading>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  ${flexCenter}
  height: 90vh;
`;
export default Page404;
