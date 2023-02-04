import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: 'Rubik', serif;
    display: grid;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'Rubik', serif;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE}; 
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
  }

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`