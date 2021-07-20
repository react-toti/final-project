import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font-size: 16px;
  }

  body {
    // you can change
    background: #f6f7fb;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    // you can change
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
