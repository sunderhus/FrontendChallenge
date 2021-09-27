import { createGlobalStyle } from 'styled-components';

import githubBackground from 'assets/github-background.svg';

export default createGlobalStyle`

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  :root{
    --background:#f0f0f5;
    --secondary:#3a3a3a;
  }

  html{
    font-size:62.5%;
  }

  body{
    background: url(${githubBackground}) no-repeat 70% top;

      background-color:var(---background);
      -webkit-font-smoothing: antialiased;
  }

  body,input, button{
      font:1.6rem Roboto, sans-serif;
  }

  #root{
      max-width:960px;
      margin:0 auto;
      padding: 40px 20px;
  }
  button{
      cursor:pointer;
  }
`;
