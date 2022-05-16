import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background: #fff;
    text-rendering: optimizeLegibility;
    background-color: #fafafa;
  }

  html, body, #root {
    height: 100%;
  }
`;

export const TransparentBackground = css`
  background: rgba(0, 0, 0, 0);
`;
