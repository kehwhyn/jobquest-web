import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
  }
  
  html,
  body,
  #root {
    height: 100%;
  }
  `;
