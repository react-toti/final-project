import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
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
    font-weight: 400;

  }

  body {
    // you can change
    background: #f0f9ff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    // you can change
    font-family: 'Roboto', sans-serif;
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
  .page-container{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content-wrap{
    flex: 1;
  }
`;
