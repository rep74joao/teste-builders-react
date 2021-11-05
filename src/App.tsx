import React from 'react';
import {createGlobalStyle} from "styled-components";
import {Home} from "./components/Home";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2a5289;
    --secondary: #ce2f4e;
    --success: #21a567;
    --textColor: #555555;
    --default: #909090;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 81.3%; //13px
    }
  }

  body {
    background: #eceaeb;
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

`;

export function App() {
  return (
    <>
      <Home/>
      <GlobalStyle/>
    </>
  );
}


