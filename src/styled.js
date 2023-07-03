import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
     box-sizing: border-box;
     background-image: url(${background});
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }
`;
