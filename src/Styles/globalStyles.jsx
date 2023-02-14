import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
    ${variables}
    ${reset}
    
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body{
        ${
          "" /* width: 100vw;
        height: 100vh; */
        }
        
        background-color: #fafafa;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
         }
`;
export default GlobalStyle;
